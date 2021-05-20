import React from "react";

const DisplayContainer = ({ summary, features, total }) => {
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <main>
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
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
