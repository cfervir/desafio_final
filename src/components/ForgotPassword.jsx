import { useState, useContext } from "react"

import ContextUser from "../ContextUser";

export default function ForgotPassword({ title, subtitle }) {

  const { userData, toggleModal, setModalMsg } = useContext(ContextUser);
  const [ emailInput, setEmailInput ] = useState();

  const theUser = userData.find(e => e.email === emailInput);

  const handleSuscribe = e => {
    e.preventDefault();

    if (theUser !== undefined) {
      if (emailInput !== '') {
        toggleModal();
        setModalMsg([
          {
            title: 'Shhhh!',
            content: `Your password is: ${theUser.pwd}`
          }
        ]);
        setEmailInput('');
      }
    } else {
      toggleModal();
      setModalMsg([
        {
          title: 'Welp!',
          content: `${emailInput} is not registered!`
        }
      ]);
    }
  };

  return (
    <form onSubmit={handleSuscribe}>
      <h3 className="form__title"> {title} </h3>
      <p className="form__subtitle"> {subtitle} </p>
      <div className="input__label--container">
        <label htmlFor="register__email" className="input__label">Email</label>
        <input type="text" className="input input__form" name="register__email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="your@email.com" required />
      </div>
      <button className="btn btn__purple btn__create">Reset Password</button>
    </form>
  )
}