export const locale = (data) => {
  return data.toLocaleString("es-CL");
};

// Calculates how many products from cartItems, as an object!
export const sumQtyObj = (cartItems) => {
  return Object.values(cartItems).reduce((a, b) => a + b.qty, 0);
};

// Calculates how many products from cartItems!
export const sumQty = (cartItems) => {
  return cartItems.reduce((a, b) => a + b.qty, 0);
};