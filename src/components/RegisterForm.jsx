import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import ContextUser from "../ContextUser";

export default function RegisterForm( { title, subtitle } ) {

  const { useForm, setUserData, setModalMsg, toggleModal } = useContext(ContextUser);
  const navigate = useNavigate();

  const initialState = {};
  const { values, changeHandler } = useForm(initialState);

  const addNew = (e) => {
    e.preventDefault();

    if (values.pwd === values.pwdRepeat) {
      setUserData(currentUsers => [...currentUsers, {
          id: `u${Date.now()}`,
          nick: values.nick,
          email: (values.email).toLowerCase(),
          name: values.name,
          pwd: values.pwd
        }
      ])
      navigate("/login");
      toggleModal();
      setModalMsg([
        {
          title: 'Hey captain!',
          content: "It's nice to have you here!"
        }
      ]);
    } else {
      toggleModal();
      setModalMsg([
        {
          title: 'Ouch!',
          content: "Your passwords don't match!"
        }
      ]);
    }
  };

  return (
    <form onSubmit={addNew}>
      <h3 className="form__title"> { title } </h3>
      <p className="form__subtitle"> { subtitle } </p>
      <div className="input__label--container">
        <label htmlFor="email" className="input__label">Email</label>
        <input type="text" className="input input__form" name="email" onChange={changeHandler} placeholder="your@email.com" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="nick" className="input__label">Username</label>
        <input type="text" className="input input__form" name="nick" onChange={changeHandler} placeholder="Username" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="name" className="input__label">Name</label>
        <input type="text" className="input input__form" name="name" onChange={changeHandler} placeholder="Name" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="pwd" className="input__label">Password</label>
        <input type="password" className="input input__form" name="pwd" onChange={changeHandler} placeholder="Password" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="pwdRepeat" className="input__label">Repeat Password</label>
        <input type="password" className="input input__form" name="pwdRepeat" onChange={changeHandler} placeholder="Repeat Password" required />
      </div>
      <div className="input__checks">
        <div className="input__label--chk">
          <input type="checkbox" name="register__eula" required />
          <label htmlFor="register__eula" className="form__eula">I accept the <Link className="form__purple" to="/eula">terms and conditions of Impreza*</Link></label>
        </div>
        <div className="input__label--chk">
          <input type="checkbox" name="register__eula" />
          <label htmlFor="register__eula" className="form__eula">Add me to Impreza's <strong className="form__purple">newsletter</strong> (Optional)</label>
        </div>
      </div>
      <button className="btn btn__purple btn__create">Create Account</button>
    </form>
  )
}