import React from "react";
import { useHistory } from "react-router-dom";
import "./Style.css"
import "./Navbar.css"

const Navbar = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  
  
  return (
    <nav className="navbar navbar-light bgNav">
      <a className="navbar-brand" href="/home">
        <img src="https://www.tribunahacker.com.ar/wp-content/uploads/2014/05/iconogrande.png" className="logo"/>
      </a>
      <div class="btn-group" >
      <button type="button" class="btn btn-info" onClick={goBack}>
        Back
      </button>
      <button type="button" class="btn btn-info" onClick={() => history.push("/home")}>
        Inicio
      </button>
      <button type="button" class="btn btn-info" onClick={() => history.push("/reglas")}>
        Reglas
      </button>
      <button type="button" class="btn btn-info" onClick={() => history.push("/un-jugador")}>
        Un Jugador
      </button>
      <button type="button" class="btn btn-info" onClick={() => history.push("/dos-jugadores")}>
        Dos Jugadores
      </button>
      </div>
    </nav>
  );
};

export default Navbar;