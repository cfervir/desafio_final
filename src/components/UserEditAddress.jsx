export default function UserEditAddress() {
  return (
    <form>
      <div className="input__label--container input__variable-full">
        <label htmlFor="user__address" className="input__label input__dark--la">Your address</label>
        <select className="input input__form input__dark" name="user__address">
          <option defaultValue="0">Your address 99, Santiago.</option>
          <option defaultValue="1">Your address 49, Santiago.</option>
        </select>
      </div>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="user__street" className="input__label input__dark--la">Street</label>
          <input type="text" className="input input__form input__dark" name="user__street" defaultValue="Address" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__block" className="input__label input__dark--la">Block, Appartment, etc.</label>
          <input type="text" className="input input__form input__dark" name="user__block" defaultValue="Some number" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__city" className="input__label input__dark--la">City</label>
          <input type="text" className="input input__form input__dark" name="user__city" defaultValue="Some city" />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__po" className="input__label input__dark--la">Postal Code</label>
          <input type="text" className="input input__form input__dark" name="user__po" defaultValue="999-999" />
        </div>
      </div>
      <div className="input__buttons container--flex">
        <button className="btn btn__width btn__red btn__remove">Remove</button>
        <button className="btn btn__width btn__blue btn__add">Add</button>
      </div>
    </form>
  )
}