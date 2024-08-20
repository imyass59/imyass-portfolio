import Home, { getServerSideProps } from "@/pages/index"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { getContext } from "../helpers"

describe("Home Page", () => {
  it("should render the heading", () => {
    render(<Home />)
    expect(screen.getByText("Imyass Portfolio")).toBeInTheDocument()
  })

  it("getServerSideProps", async () => {
    const context = getContext(null, null, null)

    const response = await getServerSideProps(context)

    expect(response).toEqual({ props: {} })
  })
})
