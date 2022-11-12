export default function UserEditForm({ useForm, isAuth, userData, setUserData }) {

  const initialState = { 
    email: '',
    nick: '',
    name: '',
    date: '',
    password: ''
  };
  const { values, changeHandler } = useForm(initialState);
  console.log(values);

  const edit = (e) => {
    e.preventDefault();
    const email = values.email;
    const pwd = values.pwd;

    const findUser = userData.find(e => e.email === email);
    if (findUser.pwd === pwd) {
      setUserData({
        ...findUser
      })
    } else {
      console.log('Bad password')
    }
  }

  return (
    <form>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="user__email" className="input__label input__dark--la">Email</label>
          <input type="email" className="input input__form input__dark" name="user__email" onChange={changeHandler} placeholder={ isAuth.email } />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__nick" className="input__label input__dark--la">Username</label>
          <input type="text" className="input input__form input__dark" name="user__nick" onChange={changeHandler} placeholder={ isAuth.nick } />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__name" className="input__label input__dark--la">Name</label>
          <input type="text" className="input input__form input__dark" name="user__name" onChange={changeHandler} placeholder={ isAuth.name } />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__date" className="input__label input__dark--la">Date of Birth</label>
          <input type="date" className="input input__form input__dark" name="user__date" min="1910-12-31" max="2004-11-01" onChange={changeHandler} defaultValue={ isAuth.birth } />
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__pwd" className="input__label input__dark--la">Password</label>
          <input type="password" className="input input__form input__dark" name="user__pwd" onChange={changeHandler} defaultValue="Your password" />
        </div>
        <div className="input__label--container input__variable">
          <button className="btn btn__teal btn__edit--final" onClick={edit} >Modify Account</button>
        </div>
      </div>
    </form>
  )
}