import { Link } from "react-router-dom";

export default function UserForm( { name } ) {
  return (
    <form>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="user__email" className="input__label input__light-la">Email</label>
          <input type="text" className="input input__form input__light" name="user__email" value="your@email.com" disabled />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__date" className="input__label input__light-la">Date of Birth</label>
          <input type="date" className="input input__form input__light" name="user__date" min="1910-12-31" max="2004-11-01" value="09/09/1990" disabled />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__name" className="input__label input__light-la">Name</label>
          <input type="text" className="input input__form input__light" name="user__name" value="Name" disabled />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__country" className="input__label input__light-la">Country</label>
          <input type="text" className="input input__form input__light" name="user__country" value="Chile" disabled />
        </div>
      </div>
      <div className="input__label--container input__variable-full">
        <label htmlFor="user__address" className="input__label input__light-la">Address</label>
        <input type="text" className="input input__form input__light" name="user__address" value="Your address 99, Santiago." disabled />
      </div>
      <Link to="/edit">
        <button className="btn btn__spacing btn__teal btn__edit">Modify Account</button>
      </Link>
    </form>
  )
}