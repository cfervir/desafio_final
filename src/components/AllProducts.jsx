import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sorting from "./Sorting";
import Images from "../images";
import ContextData from "../ContextData";
import ContextUser from "../ContextUser";

export default function AllProducts() {

  const { isAuth, userData } = useContext(ContextUser);
  const { navData, filterInput, toggleFav } = useContext(ContextData);

  const navigate = useNavigate();

  const filteredData = navData.filter((data) => {
    if (filterInput === '' || filterInput === undefined) {
      return data;
    } else {
      // Somehow this works!
      return (data.title.toLowerCase()).includes(filterInput) || (data.user.toLowerCase()).includes(filterInput);
    }
  });

  const isFav = id => {
    const theUser = userData.find(e => e.id === isAuth.id);
    return theUser.favs === undefined ? false : theUser.favs.includes(id);
  };

  return (
    <>
      <div>
        <Sorting />
      </div>
      <div className="gallery__wrap container--flex">
        {filteredData.map(content => (
          <div className="gallery__card" key={content.id}>
            <div className="gallery__fav">
              { isAuth.logged ? isFav(content.id) ? 
                <button className="btn btn__fav" onClick={ () => toggleFav(content.id) }>
                  <img src={ Images.Star } alt="Remove from favs!" />
                </button> : 
                <button className="btn btn__fav" onClick={ () => toggleFav(content.id) }>
                  <img src={ Images.StarNo } alt="Add to favs!" />
                </button>
              : '' }
            </div>
            <div onClick={ () => navigate( `gallery/${content.id}` ) } className="gallery__image">
              <img src={content.imgSmall} alt={content.title} className="gallery__image--file" />
            </div>
            <div className="gallery__information">
              <h3 className="gallery__title">{ content.title }</h3>
              <p className="gallery__author">{`By ${ content.user }`}</p>
            </div>
            <div className="gallery__price container--flex">
              <h2><span className="gallery__price--sm">$</span>{ content.price }</h2>
              <p>USD</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}