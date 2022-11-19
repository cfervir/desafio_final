import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import ContextUser from "../ContextUser";

export default function LoginForm( { title, subtitle } ) {

  const { useForm, userData, setIsAuth, setModalMsg, toggleModal } = useContext(ContextUser);
  const navigate = useNavigate();

  const initialState = { email: '', password: '' };
  const { values, changeHandler } = useForm(initialState);

  const login = (e) => {
    e.preventDefault();
    const email = (values.email).toLowerCase();
    const pwd = values.password;

    const findUser = userData.find(e => e.email === email);
    if ( findUser !== undefined ) {
      if (findUser.pwd === pwd) {
        setIsAuth({
          ...findUser,
          logged: true
        })
        navigate("/user");
        toggleModal();
        setModalMsg([
          {
            title: 'Welcome back!',
            content: `Nice to see you again ${findUser.name}!`
          }
        ]);
      } else {
        toggleModal();
        setModalMsg([
          {
            title: 'Ouch!',
            content: "Wrong password. Try recovering your password?!"
          }
        ]);
      }
    } else {
      toggleModal();
      setModalMsg([
        {
          title: 'Oh no!',
          content: `${email} does not exist!`
        }
      ]);
    }
  }

  return (
    <form name="login__form" onSubmit={ login }>
      <h3 className="form__title"> { title } </h3>
      <p className="form__subtitle"> { subtitle } </p>
      <div className="input__label--container">
        <label htmlFor="email" className="input__label">Email</label>
        <input type="email" className="input input__form" name="email" onChange={changeHandler} value={values.email} placeholder="your@email.com" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="password" className="input__label">Password</label>
        <input type="password" className="input input__form" name="password" onChange={changeHandler} value={values.password} placeholder="Password" required />
      </div>
      <button className="btn btn__purple">Log In</button>
      <p className="form__forgot">forgot your password? <Link className="form__purple" to="/forgot">click here.</Link></p>
    </form>
  )
}