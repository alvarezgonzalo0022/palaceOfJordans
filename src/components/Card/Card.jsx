import React, { Fragment } from 'react'
import { useState } from 'react'
import "../Card/index.css"
import ButtonContainer from './ButtonContainer'


const Card = ({item, handleCount, viewSelected}) => {

    const [imgUrl, setImgUrl] = useState(item.demo_male);

    const [countProduct, setCountProduct] = useState(0)


    const handleImgUrl = (value) => {
        if(value === "For Her"){
            setImgUrl(item.demo_female);
        }
        if(value === "For Him"){
            setImgUrl(item.demo_male);
        }
    }

    const handleButtonEvent = (typeOfOperation) => {
        if(typeOfOperation === "ADD") {
            const gender = imgUrl === item.demo_male ? "Male" : "Female"
            setCountProduct(prev => prev + 1)
            handleCount(item.id, item.name, imgUrl, item.price, gender, typeOfOperation)
        }
        else if(typeOfOperation === "REMOVE") {
            console.log("hola");
            const gender = imgUrl === item.demo_male ? "Male" : "Female"
            setCountProduct(prev => prev - 1)       
            handleCount(item.id, item.name, imgUrl, item.price, gender, typeOfOperation)
        }
    }

    const handleViewSelected = () => {
        if(viewSelected === "Cart") {
            return (
                <div className="card">
                    <div className="card-info">
                        <img src={item.img} alt="" />
                        <h4>{item.name} <span>({item.gender})</span></h4>
                    </div>
                    <p>{item.price * item.count}</p>
                </div>
            )
        }
        else {
            return (
                <div className="card">
                    <div className="card-info">
                        <span
                            className="text-button"
                            onClick={() => handleImgUrl("For Her")}>FOR HER
                        </span>
                        <span>/</span>
                        <span 
                            className="text-button" 
                            onClick={() => handleImgUrl("For Him")}>FOR HIM
                        </span>
                        <img src={imgUrl} alt="" />
                        <h4>{item.name}</h4>
                    </div>
                    <p>{item.price}</p>
                    <ButtonContainer props={{handleButtonEvent: handleButtonEvent, count: countProduct}}/>
                </div>
            )
        }
      }

    return (
        <Fragment>
            {handleViewSelected()}
        </Fragment> 
    )
}

export default Card