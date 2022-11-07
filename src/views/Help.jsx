export default function Help() {

  return(
    <div className="container container__content">
      <h2>Need Help?</h2>
      <p>Write us a message!</p>
      <form className="form__container">
        <div className="input__label--container">
          <label htmlFor="help__email" className="input__label">Email</label>
          <input type="text" className="input input__form" name="help__email" placeholder="your@email.com" required />
        </div>
        <div className="input__label--container">
          <label htmlFor="help__issue" className="input__label">Classification</label>
          <select type="text" className="input input__form input__select" name="help__issue" required>
            <option>Choose one!</option>
            <option value="1">Billing</option>
            <option value="2">Shipping Info</option>
            <option value="3">Legal Claims</option>
            <option value="4">General Questions</option>
          </select>
        </div>
        <div className="input__label--container">
          <label htmlFor="help__detail" className="input__label input__label--ta">Details</label>
          <textarea className="input input__form input__form--ta" name="help__detail" placeholder="Explain your issue here..."></textarea>
        </div>
        <button className="btn btn__purple">Send Message</button>
        
      </form>
    </div>
  )
}