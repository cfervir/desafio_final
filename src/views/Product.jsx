import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import NotFound from "./NotFound";
import Images from "../images";
import ContextData from "../ContextData";
import ContextUser from "../ContextUser";

export default function Product() {

  const { isAuth, toggleFav, isFav, addToCart, removeFromCart, cartItems } = useContext(ContextUser);
  const { navData } = useContext(ContextData);
  const { dataId } = useParams();
  const navigate = useNavigate();

  const findData = navData.find(data => data.id === dataId);
  if (findData === undefined ) {
    return (
      <NotFound />
    )
  }

  return (
    <div className="container container__content">
      {navData.filter(data => data.id === dataId).map(filtered => (
        <div className="product__card" key={filtered.id}>
          <h2>{ filtered.title}</h2>
          <div className="product__title--box container--flex">
            <div className="product__user--cont container--flex">
              <img className="product__user" src={ Images.User } alt="login" />
              <h3 className="product__title"><span className="product__title--space">Created by</span> <Link to={`/users/${filtered.userId}`} className="product__link">{ filtered.user }</Link></h3>
            </div>
            { isAuth.logged ? isFav(filtered.id) ? 
              <button className="btn btn__fav" onClick={ () => toggleFav(filtered.id) }>
                <div className="product__fav--cont container--flex">
                  <span className="product__fav">Remove Fav</span>
                  <img src={ Images.Star } alt="Remove from favs!" className="product__star" />
                </div>
              </button> : 
              <button className="btn btn__fav" onClick={ () => toggleFav(filtered.id) }>
                <div className="product__fav--cont container--flex">
                  <span className="product__fav product__fav--no">Favorite</span>
                  <img src={ Images.StarNo } alt="Add to favs!" className="product__star" />
                </div>
              </button>
            : "" }
          </div>
          <div className="product__data">
            <img src={ filtered.img } alt={ filtered.title } className="product__img" />
            <div className="product__final container--flex">
              <div className="product__wrapper container--flex">
                <p className="product__description">{filtered.desc}</p>
                <div className="product__price container--flex">
                  <div className="container--flex">
                    <p><strong>$</strong></p>
                    <h2>{filtered.price}</h2>
                  </div>
                  <p className="product__currency">USD</p>
                </div>
              </div>
              <div className="product__clickeables container--flex">
                { isAuth.logged ? 
                  <div className="product__buttons container--flex">
                    <button className="btn btn__blue btn__add product__clicks" onClick={() => addToCart(filtered.id)}>Add</button>
                    { cartItems[filtered.id]?.qty === 0 || cartItems[filtered.id]?.qty === undefined ?
                      <button className="btn btn__grey btn__remove product__clicks" onClick={() => removeFromCart(filtered.id)}>Remove</button> :
                      <button className="btn btn__red btn__remove product__clicks" onClick={() => removeFromCart(filtered.id)}>Remove</button>
                    }
                  </div>
                : '' }
                <div className="product__buttons product__back container--flex">
                  <button className="btn btn__teal btn__add product__back" onClick={() => navigate(-1)}>Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}