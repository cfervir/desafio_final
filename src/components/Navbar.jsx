import { Link } from "react-router-dom";
import Images from "../images";

import LoginForm from "./LoginForm";

export default function Navbar() {
  
  return (
    <nav className="nav">
      <div className="container container--flex nav__contents">
        <div className="nav__logo--container">
          <Link to="/">
            <img className="nav__logo" src={ Images.LogoColor } alt="Impreza" />
          </Link>
        </div>
        <div className="nav__links--container container--flex">

          <input className="nav__check" type="checkbox" id="nav__check" />

          <label htmlFor="nav__check" className="nav__hamburger">
            <span className="lines"></span>
          </label>

          <div className="nav__links container--flex">

            <form className="nav__form container--flex">
              <input type="text" className="input input__search" name="search" placeholder="What do you want?" required />
              <button className="btn nav__search"><img className="nav__form--img" src={ Images.Search } alt="Search!" /></button>
            </form>
            <Link className="nav__cart" to="/cart">
              <img className="nav__cart--img" src={ Images.Cart } alt="Cart" />
              <span className="nav__cart--value">X</span>
            </Link>
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
          </div>          
        </div>
      </div>
    </nav>
  );
}