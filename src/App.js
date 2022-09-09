import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/slider";
import Contact from "./Components/footer";

function App() {

  return (
    <div className="App"> 
         <Navbar/>
         <br/><br/><br/>
         <Header/>
         <Products/>
         <About />
         <Contact/>
    </div>
  );
}

export default App;
