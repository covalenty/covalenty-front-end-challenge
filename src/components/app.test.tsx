import React from "react"

import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import App from "./app"


describe("App", () => {
    test("should render message", () => {
        render(<App />)

        expect(screen.getByText("Hello, world!")).toBeInTheDocument()
    })
})
