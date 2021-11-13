import React, { useEffect } from "react";
import { useGlobalContext, url } from "./context";
// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  //
  const { isLoading, completeLoading, initializeCart } = useGlobalContext();
  //
  async function getItems() {
    const response = await fetch(url);
    const data = await response.json();
    completeLoading();
    initializeCart(data);
  }
  useEffect(() => {
    getItems();
    // return () => {
    //   cleanup
    // }
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
