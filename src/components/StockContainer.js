import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {


  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(value =>
        <Stock
          handleClick={handleClick}
          key={value.id} 
          stock={value}
         /> )}
    </div>
  );
}

export default StockContainer;


// DO NOT FORGET TO INCLUDE KEY WITH UNIQUE ID WHEN USING MAP METHOD 