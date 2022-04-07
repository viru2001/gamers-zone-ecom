import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavItem } from "./NavItem";
const HamburgerNav = ({
  status,
  wishlist,
  signOutHandler,
  setAuth,
  username,
  cart,
}) => {
  return (
    <section id="hamburger-nav-menu" className="d-none flex-wrap my-8">
      <nav className="nav-links d-flex align-center">
        <NavItem
          navItemTitle={"Products"}
          icon={"store"}
          navigateTo={"/products"}
        />
        <NavItem
          itemCount={cart.length}
          navItemTitle={"Cart"}
          icon={"shopping-cart"}
          navigateTo={"/cart"}
        />
        <NavItem
          itemCount={wishlist.length}
          navItemTitle={"Wishlist"}
          icon={"heart"}
          navigateTo={"/wishlist"}
        />
      </nav>
      <div className="d-flex align-center ml-4 py-4">
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
        {username && <h3 className="headline-sm">{`Welcome ${username}`}</h3>}
      </div>
    </section>
  );
};

export { HamburgerNav };
