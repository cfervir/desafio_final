import { useContext } from "react";
import { useNavigate  } from "react-router-dom";

import Images from "../images";
import ContextData from "../ContextData";

export default function AllProducts() {

  const { navData, isFav } = useContext(ContextData);
  const dataId = useNavigate();

  return (
    <div className="gallery__wrap container--flex">
      {navData.map(content => (
        <div className="gallery__card" key={content.id}>
          <div className="gallery__fav">
            { content.fav ? 
              <button className="btn btn__fav" onClick={ () => isFav(content.id) }>
                <img src={ Images.Star } alt="Remove from favs!" />
              </button> : 
              <button className="btn btn__fav" onClick={ () => isFav(content.id) }>
                <img src={ Images.StarNo } alt="Add to favs!" />
              </button>
            }
          </div>
          <div onClick={ () => dataId( content.id ) } className="gallery__image">
            <img src={content.imgSmall} alt={content.title} className="gallery__image--file" />
          </div>
          <div className="gallery__information">
            <h3 className="gallery__title">{ content.title }</h3>
            <p className="gallery__author">{`By ${content.user}`}</p>
          </div>
        </div>
      ))}
    </div>
  )
}