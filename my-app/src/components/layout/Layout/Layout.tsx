import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Fotter from "../../Fotter/Fotter";

const Layout = () => {
    return (
        <div className="wraper">
            <div>
                <Header />
                <div className="outLetContainer">
                    <Outlet />
                </div>
                <Fotter />
            </div>
        </div>
    );
};

export default Layout;
