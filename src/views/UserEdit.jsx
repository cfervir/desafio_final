import { useContext } from "react";

import Images from "../images";
// import UserEditForm from "../components/UserEditForm";
import UserEditAddress from "../components/UserEditAddress";

import ContextUser from "../ContextUser";

export default function UserEdit() {

  const { useForm, setIsAuth, isAuth, userData, setUserData } = useContext(ContextUser);

  const initialState = {
    id: isAuth.id,
    email: isAuth.email,
    nick: isAuth.nick,
    name: isAuth.name,
    birth: isAuth.birth,
    pwd: isAuth.pwd,
    addresses: isAuth.addresses,
    logged: true
  };
  const { values, changeHandler } = useForm(initialState);
  console.log(values);

  const edit = (e) => {
    e.preventDefault();

    if (isAuth.pwd === values.pwd) {
      setIsAuth(values);
      const findUser = userData.findIndex(e => e.id === isAuth.id);
      setUserData(currentValues => ({
          ...currentValues, [findUser]: values
      }));

    } else {
      console.log('Bad password')
    }
  }

  return(
    <div className="container container__content">
      <div className="user__info container--flex">
        <img src={Images.UserBig} alt="User" className="user__logo" />
        <h2 className="user__title">What do you want to change?</h2>
      </div>
      <div className="form__container form__container--usr">
        <form onSubmit={ edit }>
          <div className="input__wrap">
            <div className="input__label--container input__variable">
              <label htmlFor="email" className="input__label input__dark--la">Email</label>
              <input type="email" className="input input__form input__dark" name="email" onChange={changeHandler} placeholder={ isAuth.email } />
            </div>
            <div className="input__label--container input__variable">
              <label htmlFor="nick" className="input__label input__dark--la">Username</label>
              <input type="text" className="input input__form input__dark" name="nick" onChange={changeHandler} placeholder={ isAuth.nick } />
            </div>
            <div className="input__label--container input__variable">
              <label htmlFor="name" className="input__label input__dark--la">Name</label>
              <input type="text" className="input input__form input__dark" name="name" onChange={changeHandler} placeholder={ isAuth.name } />
            </div>
            <div className="input__label--container input__variable">
              <label htmlFor="date" className="input__label input__dark--la">Date of Birth</label>
              <input type="date" className="input input__form input__dark" name="date" min="1910-12-31" max="2004-11-01" onChange={changeHandler} defaultValue={ isAuth.birth } />
            </div>
            <div className="input__label--container input__variable">
              <label htmlFor="pwd" className="input__label input__dark--la">Password</label>
              <input type="password" className="input input__form input__dark" name="pwd" onChange={changeHandler} placeholder="Your password" />
            </div>
            <div className="input__label--container input__variable">
              <button className="btn btn__teal btn__edit--final">Modify Account</button>
            </div>
          </div>
        </form>
      </div>
      <p className="user__spacing"><strong>Add or remove address</strong></p>
      <div className="form__container form__container--usr">
        <UserEditAddress isAuth={( useForm, isAuth, userData, setUserData )} />
      </div>
    </div>
  )
}