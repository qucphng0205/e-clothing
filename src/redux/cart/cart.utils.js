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
