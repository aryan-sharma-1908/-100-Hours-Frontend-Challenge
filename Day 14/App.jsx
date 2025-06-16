import React, { useReducer } from "react";
import Products from "./Products.jsx";
import FilterReducer from "./Reducers/FilterReducer.jsx";


const App = () => {
  const initialState = {
    price : undefined,
    rating : undefined,
    brand : ""
  }
  const [{price,rating,brand}, filtersDispatch] = useReducer(FilterReducer,initialState)

  const onPriceChange = (e) => {
    filtersDispatch({
      type : "PRICE",
      payload : e.target.value
    })
  }
  const onRatingChange = (e) => {
    filtersDispatch({
      type : "RATING",
      payload : e.target.value
    })
  }
  const onBrandChange = (e) => {
    filtersDispatch({
      type : "BRAND",
      payload : e.target.value
    })
  }
  
  return (
    <>
      <input
        placeholder="Set Price Limit"
        type="number"
        className="h-10 my-5 mx-3"
        onChange={onPriceChange}
      />
      <input
        placeholder="Set Minimum rating"
        type="number"
        className="h-10 my-5"
        onChange={onRatingChange}
      />    
      <input
        placeholder="Brand"
        type="text"
        className="h-10 my-5"
        onChange={onBrandChange}
      />    
        <Products price={price} rating={rating} brand={brand}/>
    </>
  );
};

export default App;
