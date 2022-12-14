import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../ContextData";

export default function UserProducts( {isAuth} ) {

  const { navData, removeImg } = useContext(ContextData);

  return (
    <div className="gallery__pictures--cont container">
      <div className="gallery__pictures container--flex">
        { navData.filter(data => data.userId === isAuth.id).map(filtered => (
          <div key={filtered.id} className="gallery__ind container--flex">
            <img
              src={ filtered.imgSmall }
              alt={ filtered.name }
              className="gallery__ind--img"
            />
            <div className="gallery__ind--btn">
              <button className="btn btn__red btn__remove-sm" onClick={ () => removeImg(filtered.id) }>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="form__container">
        <Link to="/add">
          <button className="btn btn__spacing btn__blue btn__add">Add New</button>
        </Link>
      </div>
    </div>
  )
}