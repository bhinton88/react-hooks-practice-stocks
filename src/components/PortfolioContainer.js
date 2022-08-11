import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portforlioStock, setPortoflioStock }) {

  function handleClick(stock) {
    const removedStocks = portforlioStock.filter(value => value.id !== stock.id)
    setPortoflioStock(removedStocks)
  }

  // since we are creating new stocks with this container, we can pass a callback function
  // to each stock with the same name as our original stock, however it does a different function
  // which removes it when the stock is removed from the portfolio 

  return (
    <div>
      <h2>My Portfolio</h2>
      {portforlioStock.map(value =>
        <Stock key={value.id} stock={value} handleClick={handleClick} />)}
    </div>
  );
}

export default PortfolioContainer;
