import React from 'react'
import data from "../assets/data.json";
import Header from "./header/Header";
import Card from './card/Card';
import { useState } from 'react';

const Store = ({viewSelected, handleView}) => {

  const getPrice = (price) => {
    const symbol = price.indexOf("$");
    const value = Number(price.slice((symbol + 1), price.length));
    return value;
  }

  const { store, products } = data;

  const [count, setCount] = useState(0);

  const [productsInCart, setProductsInCart] = useState([])
  console.log(productsInCart);

  const handleCount = (id, name, img, price, gender, typeOfOperation) =>{

    const positionInArray = productsInCart.findIndex(product => product.id === id && product.gender === gender);

    if(typeOfOperation === "ADD"){
      const search = productsInCart.find(product=> product.id === id && product.gender === gender);

      if(search !== undefined){
        productsInCart[positionInArray].count = productsInCart[positionInArray].count + 1;
        console.log("Lista de productos activos en el carrito");
        console.log(productsInCart);
      }

      else{
        setProductsInCart([...productsInCart, {id: id, name: name, img: img, price: getPrice(price), count: 1, gender: gender}]);
        setCount(prev => prev + 1);
        console.log("Lista de productos activos en el carrito");
        console.log(productsInCart);
      }
    }

    if(typeOfOperation === "REMOVE"){
      console.log("hola");
      if(productsInCart[positionInArray].count === 1){
        setCount(prev => prev - 1);
        setProductsInCart(productsInCart.filter(product => ((product.id === id && gender !== product.gender) || (product.id !== id))));
        console.log("Lista de productos activos en el carrito");
        console.log(productsInCart);
      }
      else{
        productsInCart[positionInArray].count = productsInCart[positionInArray].count - 1;
        console.log("Lista de productos activos en el carrito");
        console.log(productsInCart);
      }
    }
  }

  const headerProps = {
    count,
    handleView
  }

  const cardProps = {
    handleCount,
    viewSelected, 
  }

  const handleViewSelected = () => {
    if(viewSelected === "Cart") {
      if(productsInCart.length === 0) {
        return <h2>No products in cart</h2>
      }
      else {
        return (
          <div className='card-container'>
              {productsInCart.map(product => <Card item={product} {...cardProps} key={product.id}/>)}
          </div>
          )
      }
    }
    else {
      return (
        <div className='card-container'>
          {products.map(product => <Card item={product} {...cardProps} key={product.id}/>)}
        </div>
      )
    }
  }

  return (
    <div>
      <Header {...store} {...headerProps}/>
      {handleViewSelected()}
    </div>
  )
}


export default Store