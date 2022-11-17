import { useContext } from "react";
import { useParams, useNavigate  } from "react-router-dom";

import Images from "../images";
import NotFound from "./NotFound";

import ContextUser from "../ContextUser";
import ContextData from "../ContextData";

export default function UserGallery() {

  const { isAuth, toggleFav, isFav } = useContext(ContextUser)
  const { navData } = useContext(ContextData);
  const { dataUser } = useParams();

  const navigate = useNavigate();

  const theUser = navData.find(e => e.userId === dataUser);
  console.log(theUser)

  const findData = navData.find(data => data.userId === dataUser);
  if (findData === undefined ) {
    return (
      <NotFound />
    )
  }

  return(
    <div className="container container__content">
      <div className="user__info user__personal container--flex">
        <img src={Images.UserBig} alt="User" className="user__logo" />
        <h2 className="user__title">{`Here's everything by ${theUser.user}!`}</h2>
      </div>
      <div className="gallery__wrap gallery__spacing container--flex">
        {navData.filter(data => data.userId === dataUser).map(filtered => (
          <div key={filtered.id} className="gallery__personal container--flex">
            <h3>{filtered.title}</h3>
            <div className="gallery__personal--img container--flex">
              <div className="gallery__fav">
                {isAuth.logged ? isFav(filtered.id) ?
                  <button className="btn btn__fav" onClick={() => toggleFav(filtered.id)}>
                    <img src={Images.Star} alt="Remove from favs!" />
                  </button> :
                  <button className="btn btn__fav" onClick={() => toggleFav(filtered.id)}>
                    <img src={Images.StarNo} alt="Add to favs!" />
                  </button>
                : ''}
              </div>
              <img onClick={() => navigate(`/gallery/${filtered.id}`)}
                src={filtered.imgSmall}
                alt={filtered.name}
                className="gallery__image--file"
              />
              <div className="gallery__price gallery__price--personal container--flex">
                <h2><span className="gallery__price--sm">$</span>{filtered.price}</h2>
                <p>USD</p>
              </div>
            </div>
            <p> {filtered.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}