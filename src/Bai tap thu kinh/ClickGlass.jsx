import React, { Component } from "react";

class ClickGlass extends Component {
  render() {
    const { glass } = this.props;
    return (
      <>
        <div className="col-5 vglasses__right p-0">
          <div className="vglasses__card">
            <div className="mb-2 text-right mt-2 mr-2">
              <button className="btn btn-warning">Before</button>
              <button className="btn btn-warning">After</button>
            </div>
            <div className="vglasses__model" id="avatar">
              {glass.map((item, index) => {
                // console.log(item);
                return (
                  <div className="item" key={index}>
                    <img src={item.url} alt="" />
                  </div>
                );
              })}
            </div>
            <div id="glassesInfo" className="vglasses__info" style={{display:"none"}}>
              {glass.map((item, index) => {
                console.log(item)
                return (
                  <div key={index}>
                    <div className="d-flex align-items-center">
                      <h2 className="fs-3">{item.name}</h2>
                    </div>
                    <div className="d-flex align-items-center">
                      <h2>{item.price}$</h2>
                      <span className="m-sm-3">Stocking</span>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClickGlass;
