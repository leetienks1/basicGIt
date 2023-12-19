import { useState } from "react";
import Input from "./Input";
import Square from "./Square";


function App() {
  const [colorValue, setColor]= useState('')
  const [hexColor, setHexColor]= useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className='App'>
      <Square
      colorValue={colorValue}
      hexColor={hexColor}
      isDarkText={isDarkText}
      />
      <Input 
      colorValue={colorValue}
      setColor={setColor}
      setHexColor={setHexColor}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
