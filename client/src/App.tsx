import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"

const router = createBrowserRouter([...routes]);

/**
  * The above code sets up a React app with routing using react-router-dom.
  * @returns The `App` component is being returned, which includes the `RouterProvider` component with
  * the `router` prop set to the created browser router (`router`).
*/
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;