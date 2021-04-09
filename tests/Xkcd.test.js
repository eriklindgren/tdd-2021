import { render, screen, waitFor } from "@testing-library/react"
import Xkcd from "../components/Xkcd"

describe("Xkcd", () => {
  it("renders expected image", async () => {
    render(<Xkcd />)
    const img = await waitFor(() => screen.getByRole('img'))
    expect(img).toHaveAttribute("src", "test-src")
  })
})
