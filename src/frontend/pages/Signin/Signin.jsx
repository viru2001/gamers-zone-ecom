import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { signinService } from "../../services";
import "./Signin.css";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const signinFormSubmitHandler = async user => {
    const [name, authToken] = await signinService(user);
    if (authToken !== undefined) {
      localStorage.setItem("AUTH_TOKEN", authToken);
      localStorage.setItem("username", name);
      setAuth(auth => ({
        ...auth,
        status: true,
        token: authToken,
        username: name,
      }));
      navigate("/");
    }
  };
  return (
    <section className="auth-card-wrapper container-center">
      <form
        className="auth-card rounded-md box-shadow-sm"
        onSubmit={e => {
          e.preventDefault();
          signinFormSubmitHandler(user);
        }}
      >
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
        <div className="px-8 py-4">
          <button
            type="submit"
            className="btn btn-primary rounded-sm text-sm p-4 w-100"
          >
            Signin
          </button>

          <button
            type="button"
            className="btn btn-outline btn-primary-outline rounded-sm text-sm p-4 w-100 mt-4"
            onClick={() =>
              signinFormSubmitHandler({
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
              })
            }
          >
            Signin as Guest
          </button>

          <div className="text-sm ml-auto d-flex justify-center">
            <Link className="link-text" to="/signup">
              Create New Account{" "}
              <i className="fas fa-greater-than ml-2 my-4"></i>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};
export { Signin };
