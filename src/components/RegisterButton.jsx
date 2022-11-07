import { Link } from "react-router-dom";

export default function RegisterButton( { title } ) {
  return (
    <div className="register__click">
      <h4 className="register__sm-title"> { title } </h4>
      <Link to="/join">
        <button className="btn btn__register btn__teal">Create One</button>
      </Link>
    </div>
  )
}