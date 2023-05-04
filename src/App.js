import React from "react";
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
      <Feature />
      <Feature2 />
      <Step />
      <Team />
      <Achievement />
      <Footer />
    </>
    
    
  );
}

export default App;
