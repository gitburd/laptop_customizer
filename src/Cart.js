import React, { Component } from "react";
import Summary from "./Summary";

export default class Cart extends Component {
  render() {
    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const { total, selected } = this.props;
    return (
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
    );
  }
}
