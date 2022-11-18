import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CategoryList from "../components/CategoryList";
import NoCategory from "../components/NoCategory";
import Images from "../images";
import ContextData from "../ContextData";
import ContextUser from "../ContextUser";

export default function Favorites() {

  const { isAuth, userData, toggleFav, isFav } = useContext(ContextUser);
  const { navData } = useContext(ContextData);
  const navigate = useNavigate();

  const findUser = userData.filter(data => data.id === isAuth.id);
  const printFavorites = findUser.flatMap(data => data.favs);

  const filteredData = navData.filter(data => printFavorites.includes(data.id));

  console.log('Printing this');
  console.log(filteredData);

  if (filteredData.length === 0 ) {
    return (
      <NoCategory />
    )
  }

  return (
    <div className="container container__content">
      <CategoryList />
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
            <div onClick={ () => navigate( `/gallery/${content.id}` ) } className="gallery__image">
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
    </div>
  )
}