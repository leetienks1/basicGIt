import React from 'react'
import colorNames from 'colornames'
const Input = ({colorValue, setColor, setHexColor , isDarkText, setIsDarkText}) => {
  return (
    <form className='inputColor' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='addColor'>addColor</label>
        <input
            id='addcolor'
            type='text'
            placeholder='add color name'
            value={colorValue}
            onChange={(e)=>{
                setColor(e.target.value)
                setHexColor(colorNames(e.target.value))
            }
       
            }
        /> 
        <button 
            type='button'
            onClick={()=>setIsDarkText(!isDarkText)}
            >
                    change Dark/light text
            </button>

        
            

    </form>
  )
}

export default Input