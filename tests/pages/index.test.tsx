import Home from "@/pages/index"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Home Page", () => {
  it("should render the heading", () => {
    render(<Home />)
    expect(screen.getByText("Imyass Portfolio")).toBeInTheDocument()
  })
})
