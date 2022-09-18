import React, { Component } from "react";
import "../assets/style.css";
import dataGlasses from "../data/dataGlasses.json";
import ClickGlass from "./ClickGlass";
import CompunentVG from "./CompunentVG";

class ThuKinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      glass: [],
    };
  }
  handleGlass = (idclick) => {
    let newGlass = [
      {
        id: idclick.id,
        price: idclick.price,
        name: idclick.name,
        url: idclick.url,
        desc: idclick.desc,
      },
    ];
    this.setState({
      display: "block",
      glass: newGlass,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-between">
          <CompunentVG handleGlass={this.handleGlass} mangdata={dataGlasses} />
          <ClickGlass glass={this.state.glass} display={this.state.display} />
        </div>
      </div>
    );
  }
}

export default ThuKinh;
