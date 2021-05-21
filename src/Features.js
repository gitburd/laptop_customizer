import React, { Component } from "react";
import featureList from "./featureList";
import Feature from "./Feature";

class Features extends Component {
  state = {};

  render() {
    const features = Object.keys(featureList).map((feature, idx) => {
      return (
        <Feature
          feature={feature}
          idx={idx}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      );
    });
    return features;
  }
}

export default Features;
