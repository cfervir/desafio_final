import { useContext } from "react";
import { Link } from "react-router-dom";

import Images from "../images";
import NavLogged from "./NavLogged";
import NavOut from "./NavOut";

import ContextUser from "../ContextUser";
import ContextData from "../ContextData";

export default function Navbar() {

  const { isAuth } = useContext(ContextUser);
  const { searchHandler } = useContext(ContextData);
  
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
              <input type="text" className="input input__search" name="search" onChange={searchHandler} placeholder="What do you want?" />
              <button className="btn nav__search"><img className="nav__form--img" src={ Images.Search } alt="Search!" /></button>
            </form>
            <Link className="nav__cart" to="/cart">
              <img className="nav__cart--img" src={ Images.Cart } alt="Cart" />
              <span className="nav__cart--value">X</span>
            </Link>
            {isAuth.logged ? <NavLogged /> : <NavOut />}
          </div>          
        </div>
      </div>
    </nav>
  );
}