import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import {useState} from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  return (
    <>
      <h2>Theme Creator</h2>
      <ColorForm />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
