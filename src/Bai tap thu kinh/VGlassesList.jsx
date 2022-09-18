import React, { Component } from "react";
class VGlassesList extends Component {
  render() {
    const { item, handleGlass } = this.props;
    //  console.log(item)
    return (
      <div>
        <div className="item" onClick={()=>{handleGlass(item)}}>
          <a>
            <img className="img-fluid" src={item.url} alt={item.url} />
          </a>
        </div>
      </div>
    );
  }
}

export default VGlassesList;
