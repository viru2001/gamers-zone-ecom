import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer text-center p-4 mt-4">
      <div className="text-sm font-wt-semibold">
        Made with ❤️ by Viresh Fegade
      </div>
      <ul className="d-flex justify-center align-center">
        <li className="m-2">
          <a
            className="text-md"
            target="_blank"
            href="https://github.com/viru2001"
            rel="noreferrer"
          >
            <i className="footer-social-icon fab fa-github"></i>
          </a>
        </li>
        <li className="m-2">
          <a
            className="text-md"
            target="_blank"
            href="https://twitter.com/fegade_viresh"
            rel="noreferrer"
          >
            <i className="footer-social-icon fab fa-twitter"></i>
          </a>
        </li>
        <li className="m-2">
          <a
            className="text-md"
            target="_blank"
            href="https://www.linkedin.com/in/viresh-fegade-43a475148/"
            rel="noreferrer"
          >
            <i className="footer-social-icon fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
