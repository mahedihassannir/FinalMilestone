import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Hone from "../Components/pages/Hone";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Hone></Hone>
                }
            ]
        }
    ]
)

export default router