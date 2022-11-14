import React from 'react'

const ButtonContainer = ({props}) => {

    const { handleButtonEvent, count } = props

    if(count === 0){
        return (
            <div className="button-container">
                <button onClick={(e) =>{
                    handleButtonEvent("ADD")
                } }
                >ADD TO CART</button>
            </div>
        )
    }
    else if(count > 0){
        return (
        <div className="button-container">
            <button style={{backgroundColor: 'red'}} onClick={() => handleButtonEvent("REMOVE")}>REMOVE</button>
            <button onClick={() => handleButtonEvent("ADD")}>ADD 1</button>
        </div>
        )
    }
}

export default ButtonContainer