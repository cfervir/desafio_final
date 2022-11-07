import { Link } from "react-router-dom";
import Images from "../images";

export default function Footer() {

  return (
    <footer className="footer container--flex">
      <div className="container container--flex footer__container">

        <div className="footer__news">

          <h4 className="footer__titles">Join our newsletter!</h4>
          <form className="container--flex footer__form">
            <input type="email" className="input input__news" name="email" placeholder="your@email.com" required />
            <button className="btn btn__img btn__teal"><img className="footer__form--img" src={ Images.Send } alt="Join us!" /></button>
          </form>

        </div>

        <div className="footer__social">
          <h4 className="footer__titles">Social Media</h4>
          <div className="footer__rrss container--flex">
            <a href="http://www.google.com">
              <img src={ Images.IG } className="footer__rrss--img" alt="Instagram" />
            </a>
            <a href="http://www.google.com">
              <img src={ Images.FB } className="footer__rrss--img" alt="Facebook" />
            </a>
              <a href="http://www.google.com">
            <img src={ Images.TW } className="footer__rrss--img" alt="Twitter" />
            </a>
          </div>

        </div>

        <div className="footer__contact container--flex">
          <img src={ Images.LogoShort } className="footer__logo" alt="Impreza" />
          <div className="footer__help container--flex">
            <Link to="/about" className="footer__links">About us</Link>
            <Link to="/help" className="footer__links">Need help?</Link>
            <Link to="/eula" className="footer__links">Terms and conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  )
}