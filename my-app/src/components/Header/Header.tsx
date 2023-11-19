import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Link className={"navbar-brand"} to="/">
                <span className={styles.logo}>Party Time!</span>
              </Link>
            </div>
            <div className="col-6">
                <div className="col">Home</div>
                <div className="col">Gallery</div>
                <div className="col">About Party</div>
                <div className="col">Reservation</div>
                <div className="col">Contacts</div>
            </div>
            <div className="col-3">

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
