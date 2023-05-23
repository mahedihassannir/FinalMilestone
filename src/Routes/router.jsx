import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Hone from "../Components/pages/Hone";
import OurManur from "../Components/pages/OurManur";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Hone></Hone>
                },
                
                {
                    path: "Manue",
                    element: <OurManur></OurManur>
                },

            ]
        }
    ]
)

export default router