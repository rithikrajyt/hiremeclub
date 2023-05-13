import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Feature } from "./components/feature";
import { Feature2 } from "./components/Feature2";
import { Step } from "./components/step";
import { Team } from "./components/Team";
import { Achievement } from "./components/achievement";
import { Footer } from "./components/Footer";
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/feature" component={Feature} />
      <Route path="/feature2" component={Feature2} />
      <Route path="/step" component={Step} />
      <Route path="/team" component={Team} />
      <Route path="/achievement" component={Achievement} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

export default App;