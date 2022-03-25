import { Link } from "react-router-dom";

const NavItem = ({ navItemTitle, number, icon, isNumberReqd, navigateTo }) => {
  return (
    <Link
      className="nav-link-icon icon-badge-wrapper m-3 d-flex flex-col align-center text-dec-none"
      to={navigateTo}
    >
      <span className="p-relative">
        <i className={`fas fa-${icon} text-md`}></i>
        {isNumberReqd ? (
          <span className="badge icon-badge-position text-sm font-wt-bold rounded-full p-absolute">
            {number}
          </span>
        ) : null}
      </span>
      <span className="nav-link-description text-sm">{navItemTitle}</span>
    </Link>
  );
};

export { NavItem };
