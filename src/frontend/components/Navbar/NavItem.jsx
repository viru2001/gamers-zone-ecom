import { Link } from "react-router-dom";

const NavItem = ({ navItemTitle, itemCount, icon, navigateTo }) => {
  return (
    <Link
      className="nav-link-icon icon-badge-wrapper m-3 d-flex flex-col align-center text-dec-none"
      to={navigateTo}
    >
      <span className="p-relative">
        <i className={`fas fa-${icon} text-md`}></i>
        {itemCount !== undefined && (
          <span
            className="badge icon-badge-position text-sm font-wt-bold rounded-full p-absolute"
            style={
              itemCount > 9 ? { padding: "1px 4px" } : { padding: "1px 8px" }
            }
          >
            {itemCount}
          </span>
        )}
      </span>
      <span className="nav-link-description text-sm">{navItemTitle}</span>
    </Link>
  );
};

export { NavItem };
