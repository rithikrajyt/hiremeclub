import React from "react";
import { Element } from "react-scroll";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Feature } from "./components/feature";
import { Feature2 } from "./components/Feature2";
import { Step } from "./components/step";
import { Team } from "./components/Team";
import { Achievement } from "./components/achievement";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />      
      <Header />
      <Element name="Feature" className="section">
      <Feature />
      </Element>
      <Element name="Step" className="section">
      <Step />
      </Element>
      <Element name="Categories" className="section">
      <Feature2 />
      </Element>
      <Element name="Team" className="section">
      <Team />
      </Element>
     <Element name="Achievement" className="section"> 
      <Achievement />
      </Element>
      <Footer />

    </>
  );
}

export default App;
