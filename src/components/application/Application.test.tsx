import { render , screen } from "@testing-library/react"
import { Application } from "./Application"

describe('application', () => {
    test('renders', () => {
        render(<Application />)
        const elment = screen.getByRole('textbox');

        expect(elment).toBeInTheDocument()

    })

})