import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h2>Text</h2>
      <Color color={initialColors[0]}/>
    </>
  );
}

export default App;
