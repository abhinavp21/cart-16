import React, { useState, useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const defaultState = {
  cart: [],
  totalCount: 0,
  totalPrice: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [isLoading, setIsLoading] = useState(true);
  //
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const initializeCart = (data) => {
    dispatch({ type: "INITIALIZE_CART", payload: data });
  };
  const completeLoading = () => {
    setIsLoading(false);
  };
  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };
  const increaseCount = (id) => {
    dispatch({ type: "INCREASE_COUNT", payload: id });
    console.log(state);
  };
  const decreaseCount = (id) => {
    dispatch({ type: "DECREASE_COUNT", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        isLoading, //st
        removeItem, //fn
        initializeCart, //fn
        completeLoading, //fn
        emptyCart,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, url, defaultState };
