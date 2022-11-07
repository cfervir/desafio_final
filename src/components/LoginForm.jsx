import { Link } from "react-router-dom";

export default function LoginForm( { title, subtitle } ) {
  return (
    <form name="login__form">
      <h3 className="form__title"> { title } </h3>
      <p className="form__subtitle"> { subtitle } </p>
      <div className="input__label--container">
        <label htmlFor="popup__email" className="input__label">Email</label>
        <input type="text" className="input input__form" name="popup__email" placeholder="your@email.com" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="popup__password" className="input__label">Password</label>
        <input type="password" className="input input__form" name="popup__password" placeholder="Password" required />
      </div>
      <Link to="/user">
        <button className="btn btn__purple">Log In</button>
      </Link>
      <p className="form__forgot">forgot your password? <Link className="form__purple" to="/forgot">click here.</Link></p>
    </form>
  )
}