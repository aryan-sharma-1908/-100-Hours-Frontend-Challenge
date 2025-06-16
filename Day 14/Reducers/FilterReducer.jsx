import React from 'react'

const FilterReducer = (state,action) => {
  switch (action.type) {
    case "PRICE" :
        return {
            ...state,
            price : action.payload}
    case "RATING" :
        return {
            ...state,
            rating : action.payload}
    case "BRAND" :
        return {
            ...state,
            brand : action.payload}
    default :
        return state
  }
}

export default FilterReducer
