import { Link } from "react-router-dom";

export default function RegisterForm( { title, subtitle } ) {
  return (
    <form>
      <h3 className="form__title"> { title } </h3>
      <p className="form__subtitle"> { subtitle } </p>
      <div className="input__label--container">
        <label htmlFor="register__email" className="input__label">Email</label>
        <input type="text" className="input input__form" name="register__email" placeholder="your@email.com" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="register__name" className="input__label">Name</label>
        <input type="text" className="input input__form" name="register__name" placeholder="Name" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="register__date" className="input__label">Date of Birth</label>
        <input type="date" className="input input__form" name="register__date" min="1910-12-31" max="2004-11-01" placeholder="09/09/1990" required />
      </div>
      <div className="input__label--container">
        <label htmlFor="register__password" className="input__label">Password</label>
        <input type="password" className="input input__form" name="register__password" placeholder="Password" required />
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
      <Link to="/user">
        <button className="btn btn__purple btn__create">Create Account</button>
      </Link>
    </form>
  )
}