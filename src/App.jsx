import { useState } from "react";
import ImageSlider from "./Components/ImageSlider/imageSlider.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageSlider />
    </>
  );
}

export default App;
