import { Link, useNavigate } from "react-router-dom";
import "../Signin/Signin.css";
import "../../../App.css";
import { useState } from "react";
import { useAuth } from "../../context";
import { signupService } from "../../services";
const Signup = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const signupFormSubmitHandler = async user => {
    const [name, authToken] = await signupService(user);
    if (authToken !== undefined) {
      localStorage.setItem("AUTH_TOKEN", authToken);
      localStorage.setItem("username", name);
      setAuth(auth => ({
        ...auth,
        status: true,
        token: localStorage.getItem("AUTH_TOKEN"),
        username: name,
      }));
      navigate("/");
    }
  };
  return (
    <section
      id="signup-card-wrapper"
      className="auth-card-wrapper container-center"
    >
      <form
        className="auth-card rounded-md box-shadow-sm my-8"
        onSubmit={e => {
          e.preventDefault();
          signupFormSubmitHandler(user);
        }}
      >
        <h1 className="headline-lg text-center py-4">Signup</h1>
        <div className="d-flex flex-col px-8 py-4">
          <label className="input-label-required text-sm my-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="text-input w-100 p-3 text-sm"
            placeholder="abc@gmail.com"
            required
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="d-flex flex-col px-8 py-4">
          <label
            className="input-label-required  text-sm my-2"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            type="text"
            className="text-input w-100 p-3 text-sm"
            placeholder="Enter first name here"
            required
            value={user.firstName}
            onChange={e => setUser({ ...user, firstName: e.target.value })}
          />
        </div>

        <div className="d-flex flex-col px-8 py-4">
          <label
            className="input-label-required  text-sm my-2"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            type="text"
            className="text-input w-100 p-3 text-sm"
            placeholder="Enter last name here"
            required
            value={user.lastName}
            onChange={e => setUser({ ...user, lastName: e.target.value })}
          />
        </div>

        <div className="d-flex flex-col px-8 py-4">
          <label
            className="input-label-required text-sm my-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="p-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="text-input w-100 p-3 text-sm"
              placeholder="Enter password here"
              required
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash text-sm p-absolute password-hide-icon cursor-pointer"></i>
              ) : (
                <i className="fas fa-eye text-sm p-absolute password-hide-icon cursor-pointer"></i>
              )}
            </span>
          </div>
        </div>
        <div className="d-flex flex-col px-8 py-4">
          <label
            className="input-label-required text-sm my-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <div className="p-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="text-input w-100 p-3 text-sm"
              placeholder="Enter password again"
              required
              value={user.confirmPassword}
              onChange={e =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
            <span
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <i className="fas fa-eye-slash text-sm p-absolute password-hide-icon cursor-pointer"></i>
              ) : (
                <i className="fas fa-eye text-sm p-absolute password-hide-icon cursor-pointer"></i>
              )}
            </span>
          </div>
        </div>
        {user.password !== user.confirmPassword && (
          <p className="text-sm px-8">Passwords don't match</p>
        )}
        <div className="px-8 py-4">
          <button
            type="submit"
            className="btn btn-primary rounded-sm text-sm p-4 w-100"
            disabled={user.password !== user.confirmPassword}
          >
            Create New Account
          </button>

          <div className="text-sm ml-auto d-flex justify-center">
            <Link className="link-text" to="/signin">
              Already have an account
              <i className="fas fa-greater-than ml-2 my-4"></i>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export { Signup };
