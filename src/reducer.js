import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INITIALIZE_CART") {
    const arr = action.payload;
    let price = 0;
    let count = 0;
    arr.forEach((obj) => {
      price += obj.amount * parseFloat(obj.price);
      count += obj.amount;
    });
    return {
      cart: action.payload,
      totalCount: count,
      totalPrice: price,
    };
  }
  if (action.type === "EMPTY_CART") {
    return {
      ...state,
      cart: [],
    };
  }
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
  if (action.type === "INCREASE_COUNT" || action.type === "DECREASE_COUNT") {
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
  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });
    return { ...state, newCart };
  }
  throw new Error("no matching action type");
};

export default reducer;

//
// //
// function decreaseCount(id) {
//   if (id === "rec1JZlfCIBOPdcT2") {
//     dispatch({ type: "DECREASE_COUNT", payload: "1" });
//   }
//   if (id === "recB6qcHPxb62YJ75") {
//     dispatch({ type: "DECREASE_COUNT", payload: "2" });
//   }
//   if (id === "recdRxBsE14Rr2VuJ") {
//     dispatch({ type: "DECREASE_COUNT", payload: "3" });
//   }
//   if (id === "recwTo160XST3PIoW") {
//     dispatch({ type: "DECREASE_COUNT", payload: "4" });
//   }
