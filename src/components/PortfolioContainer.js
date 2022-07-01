import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolios, soldFromPortfolio}) {
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolios.map((portfolio)=> <Stock key ={portfolio.id} stock = {portfolio} soldFromPortfolio= {soldFromPortfolio} /> )
      }
    </div>
  );
}

export default PortfolioContainer;
