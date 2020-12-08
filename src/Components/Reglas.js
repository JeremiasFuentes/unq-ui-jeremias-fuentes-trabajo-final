import React from 'react';
import Navbar from './Navbar';
const Reglas = (props) => {
    return (
        <div className="pageStyle">
            <Navbar/>
            <div className="textCenter">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg/600px-Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg.png" className="reglas"/>
            </div>   
            <div className="textCenter">
                <li >Tijera corta a Papel</li>
                <li >Papel tapa a Piedra</li>
                <li >Piedra aplasta a Lagarto</li>
                <li >Lagarto envenena a Spock</li>
                <li >Spock rompe a Tijera</li>
                <li>Tijera decapita a Lagarto</li>
                <li >Lagarto devora a Papel</li>
                <li >Papel desautoriza a Spock</li>
                <li >Spock vaporiza a Piedra</li>
                <li >y como siempre, Piedra aplasta a Tijera</li>
          
            </div>
        </div>)
  }
  
  export default Reglas;
