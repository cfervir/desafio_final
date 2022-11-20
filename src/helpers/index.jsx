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

// Checks if delivery is free or if user has to pay. With objects!
export const deliveryFeeObj = (total) => {
  return Object.values(total).reduce((a, b) => a + b.total, 0) < 100 ? 15 : 0;
};

// Prints total. With objects!
export const totalObj = (total) => {
  return Object.values(total).reduce((a, b) => a + b.total, 0);
};