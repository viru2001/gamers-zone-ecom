import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./Navbar.css";
import { NavItem } from "./NavItem";

const Navbar = () => {
  const {
    auth: { status, username },
    setAuth,
  } = useAuth();
  const signOutHandler = setAuth => {
    localStorage.removeItem("AUTH_TOKEN");
    setAuth(auth => ({
      ...auth,
      status: false,
      token: null,
      username: "",
    }));
  };
  return (
    <header className="navbar-wrapper d-flex align-center justify-around box-shadow-lg">
      <Link
        className="brand-name text-dec-none headline-lg font-wt-bold p-4"
        to="/"
      >
        Gamers Zone
      </Link>
      <button id="hamburger-btn" className="btn text-md ml-auto mr-8 p-4">
        <i className="fas fa-bars hamburger-icon"></i>
      </button>
      <section id="nav-menu-without-hamburger" className="d-flex m-2">
        <nav className="nav-links d-flex align-center">
          <NavItem
            navItemTitle={"Products"}
            icon={"store"}
            navigateTo={"/products"}
          />
          <NavItem
            number={0}
            navItemTitle={"Cart"}
            icon={"shopping-cart"}
            navigateTo={"/cart"}
          />
          <NavItem
            number={0}
            navItemTitle={"Wishlist"}
            icon={"heart"}
            navigateTo={"/wishlist"}
          />
          <div className="ml-4">
            {status === true ? (
              <button
                className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4"
                onClick={() => signOutHandler(setAuth)}
              >
                Signout
              </button>
            ) : (
              <Link
                to="/signin"
                className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4"
              >
                Signin
              </Link>
            )}
          </div>
          {username && <h3 className="headline-sm">{`Welcome ${username}`}</h3>}
        </nav>
      </section>
    </header>
  );
};

export { Navbar };
