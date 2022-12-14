import { useContext } from "react";
import { Link } from "react-router-dom";

import Images from "../images";
import ContextUser from "../ContextUser";

export default function NavLogged() {

  const { isAuth, setIsAuth, toggleModal, setModalMsg } = useContext(ContextUser);

  const logout = (e) => {
    e.preventDefault();

    toggleModal();
    setModalMsg([
      {
        title: 'See you soon!',
        content: `Until next time ${isAuth.name}!`
      }
    ])
    setIsAuth({
      logged: false
    })
  }
  
  return (
    <div className="nav__logged container--flex">
      <Link className="nav__logged--user" to="/user">
        <div className="container--flex">
          <img className="nav__logged--img" src={ Images.User } alt={ isAuth.name } />
          <p className="nav__logged--nick">{ isAuth.nick }</p>
        </div>
      </Link>
      <div>
        <button className="btn btn__img btn__red btn__logout" onClick={ logout } title="Logout">
          <img className="nav__logged--logout" src={ Images.LogOut } alt="Logout" />
        </button>
      </div>
    
    </div>
  )
}