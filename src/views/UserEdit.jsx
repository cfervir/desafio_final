import Images from "../images";

import UserEditForm from "../components/UserEditForm";
import UserEditAddress from "../components/UserEditAddress";

export default function UserEdit() {

  return(
    <div className="container container__content">
      <div className="user__info container--flex">
        <img src={Images.UserBig} alt="User" className="user__logo" />
        <h2 className="user__title">What do you want to change?</h2>
      </div>
      <div className="form__container form__container--usr">
        <UserEditForm />
      </div>
      <p className="user__spacing"><strong>Add or remove address</strong></p>
      <div className="form__container form__container--usr">
        <UserEditAddress />
      </div>
    </div>
  )
}