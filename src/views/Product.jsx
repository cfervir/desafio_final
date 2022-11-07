import { useContext } from "react";
import { useParams } from "react-router-dom";

import Images from "../images";
import ContextData from "../ContextData";

export default function Product() {

  const { navData } = useContext(ContextData);
  const { dataId } = useParams();

  return (
    <div className="container container__content">
      {navData.filter(data => data.id === dataId).map(filtered => (
        <div className="product__card" key={filtered.id}>
          <h2>{ filtered.title}</h2>
          <div className="product__title--box container--flex">
            <div className="product__user--cont container--flex">
              <img className="product__user" src={ Images.User } alt="login" />
              <h3 className="product__title">Created by { filtered.user }</h3>
            </div>
            { filtered.fav ? 
              <button className="btn btn__fav">
                <div className="product__fav--cont container--flex">
                  <span className="product__fav">Favorite</span>
                  <img src={ Images.Star } alt="Add to favs!" className="product__star" />
                </div>
              </button> : 
              <button className="btn btn__fav">
                <img src={ Images.StarNo } alt="Remove from favs!" className="product__star" />
              </button>
            }
          </div>
          <div className="product__data">
            <img src={ filtered.img } alt={ filtered.title } className="product__img" />
            <div className="product__final container--flex">
              <p className="product__description">{ filtered.desc }</p>
              <div className="product__price container--flex">
                <h2>{ filtered.price }</h2>
                <p className="product__currency">USD</p>
                <button className="btn btn__blue btn__add">Add</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}