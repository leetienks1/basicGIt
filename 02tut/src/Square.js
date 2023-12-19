import React from 'react'

const Square = ({colorValue,hexColor, isDarkText}) => {
  return (
    <section className='square' style={{backgroundColor: `${colorValue}`, color: isDarkText ? "#000" : "#FFF" }} >
        <p>{colorValue ? colorValue : 'empty list' }</p>
        <p>{hexColor ? hexColor : null}</p>
        </section>
  )
}

export default Square