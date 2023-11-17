import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Fotter from "../../Fotter/Fotter";

const Layout = () => {
    return (
        <div className="">
            <div>
                <Header />
                <div>
                    <Outlet />
                </div>
                <Fotter />
            </div>
        </div>
    );
};

export default Layout;
