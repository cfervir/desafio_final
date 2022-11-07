import LoginForm from "../components/LoginForm";
import RegisterButton from "../components/RegisterButton";

export default function Login() {

  return(
    <div className="container container__content">
      <div className="form__container">
        <LoginForm title="Welcome!" subtitle="We missed you!" />
        <RegisterButton title="Don't have an account?" />
      </div>
    </div>
  )
}