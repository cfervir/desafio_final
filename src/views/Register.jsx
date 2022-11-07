import RegisterForm from "../components/RegisterForm";

export default function Login() {

  return(
    <div className="container container__content">
      <div className="form__container">
        <RegisterForm title="Register" subtitle="It’s fast and easy!" />
      </div>
    </div>
  )
}