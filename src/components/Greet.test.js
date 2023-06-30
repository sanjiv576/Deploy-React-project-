import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet component', () => {
    test('renders correctly', () => {
        render(<Greet />)
        // const h1Elem = screen.getByRole('heading', {
        //     level: 2
        // })
        const h1Elem = screen.getByRole('heading', {
            name: "Hello"
        })
        expect(h1Elem).toBeInTheDocument()
    })

    test('renders with prop', () => {
        render(<Greet name={"Anoj"} />)
        const h1Elem = screen.getByText(/hello anoj/i)
        expect(h1Elem).toBeInTheDocument()
    })
})
