import "./App.css";
import FoodCart from "./foodCart/FoodCart";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";
import Footer from "./footer/Footer";

function App() {
  const [icon, setIcon] = useState(1);
  return (
    <>
      <NavBar setIcon={setIcon} icon={icon} />
      <FoodCart icon={icon} />
      <Footer />
    </>
  );
}

export default App;
