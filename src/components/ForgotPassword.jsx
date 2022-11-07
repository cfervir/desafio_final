export default function ForgotPassword({ title, subtitle }) {
  return (
    <form>
      <h3 className="form__title"> {title} </h3>
      <p className="form__subtitle"> {subtitle} </p>
      <div className="input__label--container">
        <label htmlFor="register__email" className="input__label">Email</label>
        <input type="text" className="input input__form" name="register__email" placeholder="your@email.com" required />
      </div>
      <button className="btn btn__purple btn__create">Reset Password</button>
    </form>
  )
}