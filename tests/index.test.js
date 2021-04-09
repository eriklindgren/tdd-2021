import React from "react";
import { render, screen } from "@testing-library/react"
import App from "../pages/index"

// Mock away the Xkcd component or it will cause errors
jest.mock("../components/Xkcd", () => () => (<div></div>))

describe("App", () => {
  it("renders without crashing", async () => {
    render(<App />)
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument()
  })
})
