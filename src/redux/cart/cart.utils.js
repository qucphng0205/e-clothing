export const addItemToCart = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => item.id === cartItem.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  console.log(cartItems.filter((cartItem) => cartItem.id !== item.id));
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const decreaseItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => item.id === cartItem.id);
  if (existingItem)
    if (existingItem.quantity === 1) {
      return cartItems.filter((item) => item.id !== existingItem.id);
    } else
      return cartItems.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
  // --existingItem.quantity;
  // return cartItems.filter((item) => item.quantity > 0);
};
