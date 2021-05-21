import React, { Component } from "react";
import FeaturesList from "./FeaturesList";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Features extends Component {
  state = {};
  render() {
    return <p>HEY!</p>;
  }
}

export default Features;
