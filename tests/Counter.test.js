import { render, screen } from "@testing-library/react"
import Counter from "../components/Counter"

describe("Counter", () => {
  it("renders without crashing", () => {
    render(<Counter />)
    expect(
      screen.getByRole("heading")
    ).toHaveTextContent("Counter")
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
