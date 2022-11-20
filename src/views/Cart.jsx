import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { totalObj } from "../helpers";
import ContextUser from "../ContextUser";

export default function Cart() {

  const { isAuth, cartItems, setCartItems, toggleModal, setModalMsg, addToCart, removeFromCart } = useContext(ContextUser);
  const navigate = useNavigate();

  console.log(cartItems);

  const products = parseInt(totalObj(cartItems));

  const delivery = () => {
    switch (isAuth.country) {
      case 'Chile':
        return products < 100 ? 10 : 0;
      case 'Argentina':
        return products < 100 ? 12 : 0;
      case 'Peru':
        return products < 100 ? 13 : 0;
      case 'Brasil':
        return products < 100 ? 18 : 0;
      case 'Colombia':
        return products < 100 ? 16 : 0;
      case 'Bolivia':
        return products < 100 ? 15 : 0;
      default:
        return `Complete your address first!`;
    }
  };
  const subTotal = (products + delivery());
  const taxes = (products * 0.19);
  const grandTotal = (subTotal + (products * 0.19));

  const verifications = (isAuth.street === undefined || isAuth.block === undefined || isAuth.city === undefined || isAuth.country === undefined );

  const removeProduct = id => {
    const newCartItems = { ...cartItems };
    delete newCartItems[id];
    setCartItems(newCartItems)
    // const remove = cartItems.filter((photo) => photo.id !== id);
    // setCartItems(remove);
  };

  const handleBuy = e => {
    e.preventDefault();

    if (verifications) {
      toggleModal();
      setModalMsg([
        {
          title: 'Oh no!',
          content: 'You need to complete your address before!'
        }
      ])
      navigate('/edit')
    } else {
      toggleModal();
      setModalMsg([
        {
          title: 'Congratulations!',
          content: `Your order will now be processed!`
        }
      ]);
      setCartItems('');
    }
  }

  if ( Object.keys(cartItems).length === 0 ) {
    return (
      <div className="container container__content">
        <div>
          <h2>It's empty!</h2>
          <p className="not-found">Add some products to your cart!</p>
          <button className="btn btn__teal btn__back" onClick={ () => navigate('/') }>Go Back</button>
        </div>
      </div>
    )
  }

  return(
    <div className="container container__content">
      <div className="cart container--flex">
        <h2>Your cart summary</h2>
        { Object.values(cartItems).map(cartData => (
          <div className="cart__content container--flex" key={ cartData.id }>
            <div className="cart__content--first container--flex">
              <div className="cart__remove container--flex">
                <button className="btn btn__darkpurple btn__delete" onClick={() => removeProduct(cartData.id)}>X</button>
              </div>
              <div className="cart__product container--flex">
                <img onClick={() => navigate(`/gallery/${cartData.id}`)} className="cart__image" src={cartData.url} alt={ cartData.title } />
                <div className="cart__titles">
                  <div className="container--flex">
                    <h2>{ cartData.title }</h2>
                  </div>
                  <p>by <strong>{ cartData.author }</strong></p>
                  <p>Price: <strong>${ cartData.price } USD</strong></p>
                </div>
              </div>
            </div>
            <div className="cart__subtotal container--flex">
              <div className="cart__price container--flex">
                <p><strong>$</strong></p>
                <h2>{ cartData.total }</h2>
                <p>USD</p>
              </div>
              <div className="cart__buttons container--flex">
                <button className="btn btn__red btn__cart" onClick={() => removeFromCart(cartData.id)}>-</button>
                <div>
                  { cartData.qty }
                  <p className="cart__buttons--sm">Copies</p>
                </div>
                <button className="btn btn__blue btn__cart" onClick={() => addToCart(cartData.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
        <form onSubmit={handleBuy} className="cart__form container--flex">
          <div className="cart__userInputs">
            <div className="cart__address cart__input">
              <label htmlFor="address" className="input__label input__dark--la">Your shipping address</label>
              <input
                  type="text"
                  className="input input__form input__dark"
                  name="street"
                  disabled
                  defaultValue={ verifications ? 'No address yet!' : `${isAuth.street} ${isAuth.block}, ${isAuth.city}. ${isAuth.country}.`}
                />
            </div>
            <div>
              <div className="cart__input">
                <label htmlFor="user__nick" className="input__label">Special requests</label>
                <input type="text" className="input input__form" name="user__nick" placeholder="Write here if you need something in special*" />
              </div>
              <p className="input__warning">We’ll let you know if what you’re asking can be done, or if you need to pay an extra.</p>
            </div>
          </div>
          { !isNaN(delivery()) ?
            <div className="cart__total">
              <div className="cart__total--msg">
                {delivery() !== 0 ? <span>Delivery: <strong>${delivery(isAuth.country)}</strong></span> : <span>Delivery: <strong>Free!</strong></span>}
                <div className="cart__total--msg-box">If you purchase <strong>$100 USD or more</strong> shipping is <strong>free!</strong></div>
              </div>
              <div className="cart__total--msg">
                {delivery() !== 0 ? <span>Products: <strong>${products.toLocaleString('en-US', {maximumFractionDigits: 2})}</strong></span> : ''}
                <div className="cart__total--msg-box">This is the <strong>sum of all your products</strong></div>
              </div>
              <div className="cart__total--msg">
                Subtotal: <strong>${subTotal.toLocaleString('en-US', {maximumFractionDigits: 2})}</strong>
                <div className="cart__total--msg-box">This is the <strong>sum of all your products</strong> plus the <strong>delivery fee</strong></div>
              </div>
              <div className="cart__total--msg">
                Taxes: <strong>${taxes.toLocaleString('en-US', {maximumFractionDigits: 2})}</strong>
                <div className="cart__total--msg-box">All the applicable <strong>taxes</strong> of this purchase</div>
              </div>
              <div className="cart__total--msg cart__total--final">
                <div className="cart__spacing">Grand Total: <span className="cart__price cart__price--final">${grandTotal.toLocaleString('en-US', {maximumFractionDigits: 2})} USD</span></div>
                <div className="cart__total--msg-box">The grand total, it's the sum of the <strong>products</strong>, <strong>taxes</strong> and <strong>delivery fee</strong></div>
              </div>
            </div>
            : <div className="cart__total"><strong>{ delivery(isAuth.country) }</strong></div> }
            { !isNaN(delivery()) ? 
              <div className="cart__pay container--flex">
                <div>
                  <div className="input__label--sub">
                    <input type="checkbox" name="eula" required />
                    <label htmlFor="eula" className="form__submit">I accept the <Link className="form__purple" to="/eula">terms and conditions of Impreza*</Link></label>
                  </div>
                  <div className="input__label--sub">
                    <input type="checkbox" name="gift" />
                    <label htmlFor="gift" className="form__submit"><strong className="form__purple">Is this a gift?</strong> (price tag will be removed).</label>
                  </div>
                </div>
                <button className="btn btn__green btn__pay">Pay now!</button>
              </div>
            : '' }
        </form>
      </div>
    </div>
  )
}