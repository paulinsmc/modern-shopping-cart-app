import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "T-shirt One",
      price: 29.88,
      instock: 5,
      image: "/images/t1.png",
    },
    {
      id: 2,
      name: "T-shirt Two",
      price: 34.56,
      instock: 2,
      image: "/images/t2.png",
    },
    {
      id: 3,
      name: "T-shirt Three",
      price: 26.3,
      instock: 9,
      image: "/images/t3.png",
    },
    {
      id: 4,
      name: "T-shirt Four",
      price: 20.02,
      instock: 7,
      image: "/images/t4.png",
    },
    {
      id: 5,
      name: "T-shirt Five",
      price: 15.78,
      instock: 13,
      image: "/images/t5.png",
    },
    {
      id: 6,
      name: "T-shirtr Six",
      price: 40.0,
      instock: 5,
      image: "/images/t6.png",
    },
  ]);
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider value={{ product, setProduct, cart, setCart }}>
      {props.children}
    </ProductContext.Provider>
  );
};
