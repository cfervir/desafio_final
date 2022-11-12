import { Link } from "react-router-dom";

export default function UserForm( { isAuth } ) {
  return (
    <form>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="user__email" className="input__label input__light-la">Email</label>
          <input type="text" className="input input__form input__light" name="user__email" value={ isAuth.email } disabled />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__nick" className="input__label input__light-la">Username</label>
          <input type="text" className="input input__form input__light" name="user__nick" value={ isAuth.nick } disabled />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__name" className="input__label input__light-la">Name</label>
          <input type="text" className="input input__form input__light" name="user__name" value={ isAuth.name } disabled />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__date" className="input__label input__light-la">Date of Birth</label>
          <input type="date" className="input input__form input__light" name="user__date" value={ isAuth.birth } disabled />
        </div>
      </div>
      <div className="input__label--container input__variable-full">
        <label htmlFor="user__address" className="input__label input__light-la">Address</label>
        <input type="text" className="input input__form input__light" name="user__address" value={ `${ isAuth.addresses[0].address } ${ isAuth.addresses[0].block }, ${ isAuth.addresses[0].city }. ${ isAuth.addresses[0].country }` } disabled />
      </div>
      <Link to="/edit">
        <button className="btn btn__spacing btn__teal btn__edit">Modify Account</button>
      </Link>
    </form>
  )
}