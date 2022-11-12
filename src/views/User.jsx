import { useContext } from "react";

import Images from "../images";
import UserForm from "../components/UserForm";
import UserProducts from "../components/UserProducts";
import ContextUser from "../ContextUser";

export default function User() {

  const { isAuth } = useContext(ContextUser);

  return (
    <div className="container container__content">
      <div className="user__info container--flex">
        <img src={Images.UserBig} alt="User" className="user__logo" />
        <h2 className="user__title">{`Hey ${isAuth.name}!`}</h2>
      </div>
      <div className="form__container form__container--usr">
        <UserForm isAuth={isAuth} />
      </div>
      <h2 className="user__subtitle user__spacing">Your products!</h2>
      <UserProducts isAuth={isAuth} />
    </div>
  )
}