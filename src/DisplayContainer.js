import React from "react";
import Summary from "./Summary";
import Features from "./Features";

const DisplayContainer = ({ total, selected, updateFeature }) => {
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main>
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features updateFeature={updateFeature} selected={selected} />
      </form>
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary selected={selected} USCurrencyFormat={USCurrencyFormat} />
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DisplayContainer;
