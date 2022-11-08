import Images from "../images";

import UserAddNew from "../components/UserAddNew";

export default function Add() {

  return(
    <div className="container container__content">
      <div className="user__info container--flex">
        <img src={Images.UserBig} alt="User" className="user__logo" />
        <h2 className="user__title">Add something new!</h2>
      </div>
      <div className="form__container form__container--usr">
        <UserAddNew />
      </div>
    </div>
  )
}