import { render, fireEvent, screen } from "@testing-library/react"
import Counter from "../components/Counter"

describe("Counter", () => {
  it("renders without crashing", () => {
    render(<Counter />)
    expect(screen.getByRole("heading")).toHaveTextContent("Counter")
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it("defaults to 0", () => {
    render(<Counter />)
    expect(screen.getByRole('textbox')).toHaveValue("0")
  })

  it("increases by one on first button click", () => {
    render(<Counter />)

    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('textbox')).toHaveValue("1")
  })

  it("increases by one on each button click", () => {
    render(<Counter />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('textbox')).toHaveValue("3")
  })
})
