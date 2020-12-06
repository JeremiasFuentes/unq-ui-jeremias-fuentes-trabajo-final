import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import UnJugador from "./Components/UnJugador";
import DosJugadores from "./Components/DosJugadores";

const App = () => {
  return(
    <Router>
      <div className = "container">
      <Switch>
          <Route path="/un-jugador" component={UnJugador} />
          <Route path="/dos-jugadores" component={DosJugadores} />
          <Route path="/home" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;
