import { render, screen, logRoles } from "@testing-library/react"
import Skills from "./Skills"

describe('Skills', () => {
    const skills = [
        { id: 1, name: "plumbing" },
        { id: 2, name: "wiring" },
        { id: 3, name: "painting" }
    ]
    test('renders correctly', () => {
        const view = render(<Skills skills={skills} />)
        // logRoles(view.container)
        const h2Elem = screen.getByRole('heading', {
            level: 2
        })
        expect(h2Elem).toBeInTheDocument()
        const listElem = screen.getByRole('list')
        expect(listElem).toBeInTheDocument()
    })
    test('renders the list of skills in proper order', () => {
        render(<Skills skills={skills} />)
        const itemElem = screen.getAllByRole('listitem')
        expect(itemElem).toHaveLength(3)
        expect(itemElem[0]).toHaveTextContent(/plumbing/i)
    })

    test('should show login button', () => {
        render(<Skills skills={skills} />)
        const loginBtn = screen.getByRole('button', {
            name: 'login'
        })
        expect(loginBtn).toBeInTheDocument()
    })
    test('should not show start working button', () => {
        render(<Skills skills={skills} />)
        const startBtn = screen.queryByRole('button', {
            name: 'start working'
        })
        expect(startBtn).not.toBeInTheDocument()
    })

    test('should show start working later', async () => {
        render(<Skills skills={skills} />)
        const startBtn = await screen.findByRole('button', {
            name: 'start working'
        }, { timeout: 1010 })
        expect(startBtn).toBeInTheDocument()

    })
})