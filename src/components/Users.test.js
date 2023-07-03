import { render, screen } from "@testing-library/react"
import Users from "./Users"
import { server } from "../mocks/server"
import { handleRequest, rest } from "msw"
import userEvent from "@testing-library/user-event"

describe('Users', () => {
    test('should render correctly', () => {
        render(<Users />)
        const h1Elem = screen.getByRole('heading', { level: 1 })
        expect(h1Elem).toBeInTheDocument()
    })
    test('should show a list of users', async () => {
        render(<Users />)
        const userList = await screen.findAllByRole('listitem')
        expect(userList).toHaveLength(3)
    })

    test('should call handleDelete', async () => {
        const mockDelete = jest.fn()
        render(<Users handleDelete={mockDelete} />)
        const btnItem = await screen.findAllByRole('button', {
            name: 'delete'
        })
        userEvent.click(btnItem[0])
        expect(mockDelete).toHaveBeenCalled()
    })

    // test('should show error', async () => {
    //     server.use(
    //         rest.get('https://jsonplaceholder.typicode.com/users',
    //             (req, res, ctx) => {
    //                 return res(ctx.status(500))
    //             })
    //     )

    //     render(<Users />)

    //     const errElem = await screen.findByText('error fetching data')
    //     expect(errElem).toBeInTheDocument()
    // })




})
