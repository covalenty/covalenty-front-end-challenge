import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./components/app"


const init = () => {
    const element = document.getElementById("app")
    const root = createRoot(element)

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    )
}


init()
