import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockData, setStockData] = useState([])
  const [portforlioStock, setPortoflioStock] = useState([])
  const [sortBy, setSortBy]= useState("")
  const [filterCategory, setFilterCategory] = useState("") 


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(data => setStockData(data))
  },[]) 

  function handleClick (stock) {
    setPortoflioStock([...portforlioStock,stock])
  } 

  function handleRadioButton(event){
    setSortBy(event.target.value)
  }

  const sortedArray = [...stockData].sort((a,b) => handleData(a,b))

  function handleData (a,b) {
    if(sortBy === "Alphabetically"){
      return  a.name.localeCompare(b.name)
    } else if (sortBy === "Price"){
      return sortByPrice(a,b) 
    } else {
      return stockData
    }
  }

  // below function sorts the NUMBERS properly so that our price sort array returns properly

  function sortByPrice (a,b) {
    if(a.price > b.price) return 1;
    if(a.price < b.price) return -1;
    return 0;
  }

  function handleCategoryChange(event) {
    setFilterCategory(event.target.value)
  }

  const filteredArray = sortedArray.filter(value => {
    if(filterCategory === "") {
      return value
    } else {
      return value.type === filterCategory
    }
  } )

  return (
    <div>
      <SearchBar 
        sortBy={sortBy}
        handleRadioButton={handleRadioButton} 
        handleCategoryChange={handleCategoryChange}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={filteredArray}
            handleClick={handleClick}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          portforlioStock={portforlioStock}
          setPortoflioStock={setPortoflioStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
