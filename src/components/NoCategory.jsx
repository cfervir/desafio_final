import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ContextUser from "../ContextUser";

export default function NoCategory() {

  const { isAuth, userData } = useContext(ContextUser);
  const navigate = useNavigate();

  const findUser = userData.filter(data => data.id === isAuth.id);
  const printFavorites = findUser.flatMap(data => data.favs);
  
  if (printFavorites.length === 0 && isAuth.logged ) {
    return (
      <div className="container container__content">
        <div>
          <h2>Ooops!</h2>
          <p className="not-found">You need to add some favorites first!</p>
          <button className="btn btn__teal btn__back" onClick={ () => navigate(-1) }>Go Back</button>
        </div>
      </div>
    )
  }
 
  return (
    <div className="container container__content">
      <h2>Ooops!</h2>
      <p className="not-found">We don't have this category, go back!</p>
      <button className="btn btn__teal btn__back" onClick={ () => navigate(-1) }>Go Back</button>
    </div>
  )
};