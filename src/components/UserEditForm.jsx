import { useContext } from "react";

import ContextUser from "../ContextUser";

export default function UserEditForm() {

  const countries = ["Chile", "Argentina", "Peru", "Brasil", "Colombia", "Bolivia"];
  const { useForm, setIsAuth, isAuth, userData, setUserData } = useContext(ContextUser);

  const initialState = {
    id: isAuth.id,
    nick: isAuth.nick,
    email: isAuth.email,
    name: isAuth.name,
    birth: isAuth.birth
  };
  const { values, changeHandler } = useForm(initialState);

  const edit = (e) => {
    e.preventDefault();

    if (isAuth.pwd === values.pwd) {
      const newValues = { ...isAuth, ...values };
      setIsAuth(newValues);

      const findUser = userData.findIndex(e => e.id === isAuth.id);
      const updateState = userData.map((newData, i) => {
        if (i === findUser) {
          // if (values.newPwd !== undefined) {
          //   const newPwd = values.newPwd;
          //   console.log(newPwd);
          // }
          return { ...newData, ...values };
        }
        return newData;
      });
      setUserData(updateState);

      // setUserData(currentValues => [
      //   ...currentValues, {[findUser]: values
      // }]);

    } else {
      console.log('Bad password')
    }
  }

  return (
    <form onSubmit={edit}>
      <p className="user__spacing"><strong>Personal Information</strong></p>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="email" className="input__label input__dark--la">Email</label>
          <input type="email" className="input input__form input__dark" name="email" onChange={changeHandler} placeholder={isAuth.email} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="nick" className="input__label input__dark--la">Username</label>
          <input type="text" className="input input__form input__dark" name="nick" onChange={changeHandler} placeholder={isAuth.nick} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="name" className="input__label input__dark--la">Name</label>
          <input type="text" className="input input__form input__dark" name="name" onChange={changeHandler} placeholder={isAuth.name} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="birth" className="input__label input__dark--la">Date of Birth</label>
          <input type="date" className="input input__form input__dark" name="birth" min="1910-12-31" max="2004-11-01" onChange={changeHandler} defaultValue={isAuth.birth} />
        </div>
      </div>

      <p className="user__spacing"><strong>Modify your address</strong></p>
      <div className="input__label--container input__variable-full">
        <label htmlFor="address" className="input__label input__dark--la">Your full address</label>
        <input
            type="text"
            className="input input__form input__dark"
            name="street"
            disabled
            defaultValue={ isAuth.street === undefined ? 'No address yet!' : `${isAuth.street} ${isAuth.block}, ${isAuth.city}. ${isAuth.country}.`}
          />
      </div> 
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="street" className="input__label input__dark--la">Adress</label>
          <input type="text" className="input input__form input__dark" name="street" onChange={changeHandler} placeholder={isAuth.street} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="block" className="input__label input__dark--la">Block, Appartment, etc.</label>
          <input type="text" className="input input__form input__dark" name="block" onChange={changeHandler} placeholder={isAuth.block} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="city" className="input__label input__dark--la">City</label>
          <input type="text" className="input input__form input__dark" name="city" onChange={changeHandler} placeholder={isAuth.city} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="country" className="input__label input__dark--la">Country</label>
          <select className="input input__form input__dark" onChange={changeHandler} name="country">
            { countries.map(data => <option key={data}>{data}</option> )}
          </select>
        </div>
      </div>

      {/* <div className="input__buttons container--flex">
        <button className="btn btn__width btn__red btn__remove">Remove</button>
        <button className="btn btn__width btn__blue btn__add">Add</button>
      </div> */}

      <p className="user__spacing"><strong>Your password</strong></p>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="new__pwd" className="input__label input__dark--la">New Password</label>
          <input type="password" className="input input__form input__dark" name="newPwd" onChange={changeHandler} placeholder="New password" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="pwd" className="input__label input__dark--la">Password</label>
          <input type="password" className="input input__form input__dark" name="pwd" onChange={changeHandler} placeholder="Actual password" />
        </div>
      </div>

      <div className="input__buttons container--flex">
        <button className="btn btn__teal btn__edit">Modify Account</button>
      </div>
    </form>
  )
}