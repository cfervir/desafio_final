import { Link } from "react-router-dom";

import Images from "../images";
import LoginForm from "./LoginForm";

export default function NavOut() {
  return (
    <>
      <Link className="nav__join" to="/join">
        <button className="btn btn__join">Join us!</button>
      </Link>
      <div className="nav__login container--flex">
        <Link className="nav__login container--flex" to="/login">
          <img className="nav__login--img" src={ Images.User } alt="login" />
          <button className="btn btn__login-sm">Log In</button>
        </Link>
        <div className="nav__popup--container">
          <div className="nav__popup">
            <LoginForm title="Login" />
          </div>
        </div>
      </div>
    </>
  )
}