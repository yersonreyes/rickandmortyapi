import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

//Rutas
import Character from "./Pages/Character";
import Location from "./Pages/Location";
import Episode from "./Pages/Episode";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character" component={Character} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/episode" component={Episode} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
