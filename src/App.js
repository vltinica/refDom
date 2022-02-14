import "./App.css";
import React from "react";
import goodsArr from "./goods.json";
import Goods from "./Goods";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: {},
      count: 0,
    };

    // this.state = {
    //   count: 0,
    // };
  }

  render() {
    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field">
          {goodsArr.map((item) => (
            <Goods
              title={item.title}
              cost={item.cost}
              image={item.image}
              articul={item.articul}
              key={item.articul}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
