import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <>

            <div className="navbar   fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/">Home</Link>



                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Botes Food</a>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu gap-4 menu-horizontal px-1">
                        <Link to="/">Home</Link>
                        <Link to="/Manue"> OurManue</Link>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>

        </>
    );
};

export default Nav;