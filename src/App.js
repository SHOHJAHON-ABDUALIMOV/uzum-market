import React from "react";
import "./index.css";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <LoginModal />
      <Slider />
      <ProductList />
    </div>
  );
}

export default App;
