import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
const [stocks, setStocks] = useState([])
const[filterByType, setFilterByType] = useState("Tech")


useEffect(()=>{
  fetch("http://localhost:3001/stocks")
  .then(data => data.json())
  .then(data => setStocks(data))
}, [])

function addToPortfolio(buyStock){
  setStocks(stocks.map((stock) => stock.id === buyStock.id ? {...stock, isInPortfolio: true} : stock))
}

function soldFromPortfolio(soldStock){
  const soldMyStock = stocks.filter((stock) => stock.id !== soldStock.id)

  setStocks(soldMyStock)
}

const filteredStocks = stocks.filter((stock) => stock.type === filterByType)




  return (
    <div>
      <SearchBar stocks = {filteredStocks} setStocks ={setStocks} setFilterByType ={setFilterByType}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks ={filteredStocks} addToPortfolio={addToPortfolio} soldFromPortfolio ={soldFromPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolios = {filteredStocks.filter((stock) => stock.isInPortfolio)} soldFromPortfolio ={soldFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
