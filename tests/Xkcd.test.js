import { render, screen } from "@testing-library/react"
import Xkcd from "../components/Xkcd"

describe("Xkcd", () => {
  it("renders expected image", async () => {
    render(<Xkcd />)
    expect(await screen.findByRole("img")).toHaveAttribute("src", "https://imgs.xkcd.com/comics/hammer_incident.png")
  })
})
