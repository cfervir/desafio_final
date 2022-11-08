export default function UserEditForm() {
  return (
    <form>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="user__email" className="input__label input__dark--la">Email</label>
          <input type="email" className="input input__form input__dark" name="user__email" defaultValue="your@email.com" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__date" className="input__label input__dark--la">Date of Birth</label>
          <input type="date" className="input input__form input__dark" name="user__date" min="1910-12-31" max="2004-11-01" defaultValue="09/09/1990" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__name" className="input__label input__dark--la">Name</label>
          <input type="text" className="input input__form input__dark" name="user__name" defaultValue="Name" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__country" className="input__label input__dark--la">Country</label>
          <select className="input input__form input__dark" name="user__country">
            <option defaultValue="chile">Chile</option>
            <option defaultValue="argentina">Argentina</option>
            <option defaultValue="peru">Peru</option>
            <option defaultValue="brasil">Brasil</option>
            <option defaultValue="colombia">Colombia</option>
            <option defaultValue="bolivia">Bolivia</option>
          </select>
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__pwd" className="input__label input__dark--la">Password</label>
          <input type="password" className="input input__form input__dark" name="user__pwd" defaultValue="Something here!" />
        </div>
        <div className="input__label--container input__variable">
          <button className="btn btn__teal btn__edit--final">Modify Account</button>
        </div>
      </div>
    </form>
  )
}