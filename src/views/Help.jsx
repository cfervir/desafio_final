import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import ContextUser from "../ContextUser";

export default function Help() {

  const { toggleModal, setModalMsg } = useContext(ContextUser);
  const navigate = useNavigate();

  const help = (e) => {
    e.preventDefault();

    toggleModal();
    setModalMsg([
      {
        title: 'Thanks!',
        content: `Your ticket ID is P${Math.floor(Math.random() * 9000 + 1000)}, soon we'll get in contact with you!`
      }
    ]);
    navigate('/');
  }

  return(
    <div className="container container__content">
      <h2>Need Help?</h2>
      <p>Write us a message!</p>
      <form onSubmit={help} className="form__container">
        <div className="input__label--container">
          <label htmlFor="email" className="input__label">Email</label>
          <input type="email" className="input input__form" name="email" placeholder="your@email.com" required />
        </div>
        <div className="input__label--container">
          <label htmlFor="issue" className="input__label">Classification</label>
          <select type="text" className="input input__form input__select" name="issue" required>
            <option>Choose one!</option>
            <option value="1">Billing</option>
            <option value="2">Shipping Info</option>
            <option value="3">Legal Claims</option>
            <option value="4">General Questions</option>
          </select>
        </div>
        <div className="input__label--container">
          <label htmlFor="detail" className="input__label input__label--ta">Details</label>
          <textarea className="input input__form input__form--ta" name="detail" placeholder="Explain your issue here..."></textarea>
        </div>
        <button className="btn btn__purple">Send Message</button>
        
      </form>
    </div>
  )
}