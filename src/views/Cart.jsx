import { useContext } from "react";

// import { sumQty } from "../helpers";
import ContextUser from "../ContextUser";

export default function Cart() {

  const { cartItems, setCartItems, addToCart, removeFromCart} = useContext(ContextUser);
  console.log(cartItems);

  const removeProduct = id => {
    const newCartItems = { ...cartItems };
    delete newCartItems[id];
    setCartItems(newCartItems)
    // const remove = cartItems.filter((photo) => photo.id !== id);
    // setCartItems(remove);
  };

  return(
    <div className="container container__content">
      <div className="cart container--flex">
        { Object.values(cartItems).map(cartData => (
          <div className="cart__content container--flex" key={ cartData.id }>
            <div className="cart__product container--flex">
              <img className="cart__image" src={cartData.url} alt={ cartData.title } />
              <div className="cart__titles">
                <h2>{ cartData.title }</h2>
                <p>by { cartData.author }</p>
                <p>Price: <strong>${ cartData.price } USD</strong></p>
              </div>
            </div>
            <div className="cart__subtotal container--flex">
              <div className="container--flex">
                <h2><span className="">$</span>{ cartData.total }</h2>
                <p>USD</p>
              </div>
              <div>
                <div className="cart__buttons container--flex">
                  <button className="btn btn__red btn__cart" onClick={() => removeFromCart(cartData.id)}>-</button>
                  <span>{ cartData.qty }</span>
                  <button className="btn btn__blue btn__cart" onClick={() => addToCart(cartData.id)}>+</button>
                </div>
                <button className="btn btn__darkpurple btn__delete" onClick={() => removeProduct(cartData.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {sumQty(cartItems)} */}
    </div>
  )
}