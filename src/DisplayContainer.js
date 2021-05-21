import React from "react";
import Features from "./Features";
import Cart from "./Cart";

const DisplayContainer = ({ total, selected, updateFeature }) => {
  return (
    <main>
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features updateFeature={updateFeature} selected={selected} />
      </form>
      <Cart selected={selected} total={total} />
    </main>
  );
};

export default DisplayContainer;
