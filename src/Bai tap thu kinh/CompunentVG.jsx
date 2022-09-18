import React, { Component } from "react";
import VGlassesList from "./VGlassesList";
class CompunentVG extends Component {
  render() {
    const { mangdata, handleGlass } = this.props;
    return (
      <>
            <div className="col-6 vglasses__left">
              <div className="row">
                <div className="col-12">
                  <h1 className="mb-2">Virtual Glasses</h1>
                </div>
              </div>
              <div className="row" id="vglassesList">
                {mangdata.map((item, index) => {
                  return (
                    <div className="col-4" key={index}>
                      <VGlassesList handleGlass={handleGlass} item={item} />
                    </div>
                  );
                })}
              </div>
            </div>   
          </>
    );
  }
}

export default CompunentVG;
