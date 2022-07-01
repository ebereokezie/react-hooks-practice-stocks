import React, {useState} from "react";

function SearchBar({stocks, setStocks, setFilterByType}) {

  const[filterByLetter, setFilterByLetter] = useState(false)
  const[filterByPrice, setFilterByPrice] = useState(false)
  

  
  function sortByAlphabet(e){
    setFilterByLetter(() => !filterByLetter)
    setFilterByPrice(false)
    if(e.target.checked){
      const alphabetStocks = stocks.slice().sort((a,b) =>{
        if(a.ticker < b.ticker) return -1
        if(a.ticker > b.ticker) return 1

        return 0
      })
      setStocks(alphabetStocks)
    } else {
      setStocks(stocks)
    }
  }


  function sortByPrice(e){
    setFilterByPrice(() => !filterByPrice)
    setFilterByLetter(false)
    if(e.target.checked){
      const priceyStocks = stocks.slice().sort((a,b) =>{
        if(a.price > b.price) return -1
        if(a.price < b.price) return 1

        return 0
      })
      setStocks(priceyStocks)
    } else {
      setStocks(stocks)
    }
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={filterByLetter} 
          onChange={sortByAlphabet}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={filterByPrice}
          onChange={sortByPrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilterByType(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
