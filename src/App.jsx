import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: nanoid() };
    const updateColors = [colorWithId, ...colors];
    console.log(colorWithId);
  setColors(updateColors);
  }
  function handleDeleteColor(id) {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  }
  return (
    <>
      <h2>Theme Creator</h2>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} onDeleteColor={handleDeleteColor} />
      ))}
    </>
  );
}

export default App;
