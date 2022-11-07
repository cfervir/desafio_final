import ForgotPassword from "../components/ForgotPassword";

export default function Login() {

  return(
    <div className="container container__content">
      <div className="form__container">
        <ForgotPassword title="Give us your email!" subtitle="This will be solved soon"/>
      </div>
    </div>
  )
}