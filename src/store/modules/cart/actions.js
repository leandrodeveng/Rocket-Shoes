export function addToCartRequest(id) {
  return { type: '@Cart/ADD_REQUEST', id };
}

export function addToCartSuccess(id) {
  return { type: '@Cart/ADD_SUCCESS', id };
}

export function removeFromCart(id) {
  return {
    type: '@Cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@Cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
