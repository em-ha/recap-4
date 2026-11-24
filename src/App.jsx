import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h2>Theme Creator</h2>
      {initialColors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
