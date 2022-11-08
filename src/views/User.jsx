import { useContext } from "react";

import Images from "../images";
import UserForm from "../components/UserForm";
import UserProducts from "../components/UserProducts";
import ContextData from "../ContextData";

export default function User() {

  const { navData } = useContext(ContextData);

  return (
    <div className="container container__content">
      <div className="user__info container--flex">
        <img src={Images.UserBig} alt="User" className="user__logo" />
        { navData.filter(data => data.userId === "u0004").slice(0, 1).map(filtered => (
          <h2 className="user__title" key={filtered.id}>{`Hey ${filtered.user}!`}</h2>
        ))}
      </div>
      <div className="form__container form__container--usr">
        <UserForm />
      </div>
      <h2 className="user__subtitle user__spacing">Your products!</h2>
      <UserProducts />
    </div>
  )
}