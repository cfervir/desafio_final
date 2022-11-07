import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../ContextData";

export default function UserProducts() {

  const { navData } = useContext(ContextData);

  return (
    <div className="container">
      <div className="gallery__pictures container--flex">
        { navData.filter(data => data.userId === "u0004").map(filtered => (
          <div key={filtered.id} className="gallery__ind container--flex">
            <img
              src={ filtered.imgSmall }
              alt={ filtered.name }
              className="gallery__ind--img"
            />
            <div className="gallery__ind--btn">
              <button className="btn btn__red btn__remove-sm">Remove</button>
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