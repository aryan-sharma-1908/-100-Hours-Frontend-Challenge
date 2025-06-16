import React, { createContext, useContext } from 'react'

const ItemContext = createContext();

//provider
const  ItemProvider = ({children}) => {
    const items = [
    {
      name: "boAt Airdopes Alpha",
      brand: "boAt",
      theme: "Dark Cyan, In the Ear",
      rating: "4",
      price: "799",
    },
    {
      name: "ZEBRONICS Zeb-Jet",
      brand: "ZEBRONICS",
      theme: "Black + Blue, On the Ear",
      rating: "3.9",
      price: "699",
    },
    {
      name: "ZEBRONICS BRO",
      brand: "ZEBRONICS",
      theme: "Blue, On the Ear",
      rating: "3.7",
      price: "399",
    },
    {
      name: "Techio Earbuds Bluetooth",
      brand: "Techio",
      theme: "White, True Wireless",
      rating: "3",
      price: "799",
    },
    {
      name: "boAt Airdopes Alpha",
      brand: "boAt",
      theme: "Black, In the Ear",
      rating: "4.8",
      price: "299",
    },
  ];

  return (
    <ItemContext.Provider value={{items}}>
        {children}
    </ItemContext.Provider>
  )
}

//consumer
const useItem = () => useContext(ItemContext)


// export 

export {useItem, ItemProvider}
