import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";

import {Outlet} from 'react-router-dom'

const Main = () => {
    return (
        <div>

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;