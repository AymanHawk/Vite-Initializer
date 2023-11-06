import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import Image from "./components/Image";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Image/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: 'profile/:name',
            element: <Profile/>,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;