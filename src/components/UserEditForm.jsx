import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ContextUser from "../ContextUser";
import ContextData from "../ContextData";

export default function UserEditForm() {

  const countries = ["Chile", "Argentina", "Peru", "Brasil", "Colombia", "Bolivia"];
  const { useForm, setIsAuth, isAuth, userData, setUserData, setModalMsg, toggleModal } = useContext(ContextUser);
  const { navData, setNavData } = useContext(ContextData);
  const navigate = useNavigate();

  const initialState = {
    id: isAuth.id,
    nick: isAuth.nick,
    email: isAuth.email,
    name: isAuth.name,
    birth: isAuth.birth
  };
  const { values, changeHandler } = useForm(initialState);

  const removeUserEmail = userData.filter(data => data.email !== isAuth.email);
  const repeatedEmail = removeUserEmail.some(data => data.email === values.email);

  const editUser = (e) => {
    e.preventDefault();

    if (!repeatedEmail) {
      if (isAuth.email !== '') {
        if (isAuth.pwd === values.pwd) {
          const newValues = { ...isAuth, ...values, email: (values.email).toLowerCase() };
          setIsAuth(newValues);

          const findUser = userData.findIndex(e => e.id === isAuth.id);
          const updateState = userData.map((newData, i) => {
            if (i === findUser) {
              // Attempt at trying to change password
              // if (values.newPwd !== undefined) {
              //   const newPwd = values.newPwd;
              //   console.log(newPwd);
              // }
              return { ...newData, email: (values.email).toLowerCase() };
            }
            return newData;
          });
          setUserData(updateState);

          const updateName = navData.map((newName) => {
            if (newName.userId === isAuth.id) {
              return { ...newName, user: values.name };
            }
            return newName;
          });
          setNavData(updateName);
          navigate("/user");

          toggleModal();
          setModalMsg([
            {
              title: 'Congrats!',
              content: 'Your information has been updated!'
            }
          ]);
        } else {
          toggleModal();
          setModalMsg([
            {
              title: 'Oh no!',
              content: 'Wrong password!'
            }
          ]);
        } 
      }
    } else {
      toggleModal();
      setModalMsg([
        {
          title: 'Yikes!',
          content: `${values.email} is already registered!`
        }
      ]);
    }
  };

  return (
    <form onSubmit={editUser}>
      <p className="user__spacing"><strong>Personal Information</strong></p>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="email" className="input__label input__dark--la">Email</label>
          <input type="email" className="input input__form input__dark" name="email" onChange={changeHandler} placeholder={isAuth.email} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="nick" className="input__label input__dark--la">Username</label>
          <input type="text" className="input input__form input__dark" name="nick" maxLength="12" onChange={changeHandler} placeholder={isAuth.nick} />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="name" className="input__label input__dark--la">Name</label>
          <input type="text" className="input input__form input__dark" name="name" maxLength="40" onChange={changeHandler} placeholder={isAuth.name} />
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
          <label htmlFor="street" className="input__label input__dark--la">Address</label>
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
          <select className="input input__form input__dark" defaultValue={isAuth.country} onChange={changeHandler} name="country">
            { isAuth.country ? '' : <option value="">Choose one!</option> }
            { countries.map(data => <option key={data}>{data}</option> )}
          </select>
        </div>
      </div>

      {/* <div className="input__buttons container--flex">
        <button className="btn btn__width btn__red btn__remove">Remove</button>
        <button className="btn btn__width btn__blue btn__add">Add</button>
      </div> */}

      <p className="user__spacing"><strong>Your password</strong></p>
      <div className="input__label--container input__password">
        <label htmlFor="pwd" className="input__label input__dark--la">Password</label>
        <input type="password" className="input input__form input__dark" name="pwd" onChange={changeHandler} placeholder="Confirm password" />
      </div>
      {/* <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="new__pwd" className="input__label input__dark--la">New Password</label>
          <input type="password" className="input input__form input__dark" name="newPwd" onChange={changeHandler} placeholder="New password" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="pwd" className="input__label input__dark--la">Password</label>
          <input type="password" className="input input__form input__dark" name="pwd" onChange={changeHandler} placeholder="Actual password" />
        </div>
      </div> */}

      <div className="input__buttons container--flex">
        <button className="btn btn__teal btn__edit">Modify Account</button>
      </div>
    </form>
  )
}