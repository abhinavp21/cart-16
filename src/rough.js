if (action.type === "INCREASE_COUNT" || "DECREASE_COUNT") {
  const newCart = state.cart.map((item) => {
    let updatedItem = { ...item };
    if (item.id === action.payload) {
      if (action.type === "INCREASE_COUNT")
        updatedItem = { ...item, amount: item.amount + 1 };
      else updatedItem = { ...item, amount: item.amount - 1 };
    }
    return updatedItem;
  });
  let arr = newCart;
  let price = 0;
  let count = 0;
  arr.forEach((obj) => {
    console.log(obj);
    price += obj.amount * parseFloat(obj.price);
    count += obj.amount;
  });
  return {
    cart: newCart,
    totalCount: count,
    totalPrice: price,
  };
}

if (action.type === "INCREASE_COUNT") {
  //
  const newCart = state.cart.map((item) => {
    let updatedItem = { ...item };
    if (item.id === action.payload) {
      updatedItem = { ...item, amount: item.amount + 1 };
    }
    return updatedItem;
  });
  let arr = newCart;
  let price = 0;
  let count = 0;
  arr.forEach((obj) => {
    console.log(obj);
    price += obj.amount * parseFloat(obj.price);
    count += obj.amount;
  });
  return {
    cart: newCart,
    totalCount: count,
    totalPrice: price,
  };
}
if (action.type === "DECREASE_COUNT") {
  const newCart = state.cart.map((item) => {
    let updatedItem = { ...item };
    if (item.id === action.payload) {
      updatedItem = { ...item, amount: item.amount - 1 };
    }
    return updatedItem;
  });
  let arr = newCart;
  let price = 0;
  let count = 0;
  arr.forEach((obj) => {
    console.log(obj);
    price += obj.amount * parseFloat(obj.price);
    count += obj.amount;
  });
  return {
    cart: newCart,
    totalCount: count,
    totalPrice: price,
  };
}
