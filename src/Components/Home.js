import React from 'react';
import {Link} from 'react-router-dom'
import "./Style.css"



const Home = () =>{


    return(
        <div className="pageStyle">
            <div className="textCenter">
                <h1 className="title">Piedra, Papel, Tijera, Lagarto o Spock</h1>
                <img src="https://i.pinimg.com/originals/5c/d4/01/5cd401ba27bba42099f2cd881f695dc2.jpg" className="reglas"></img>
            </div>
            <div className="textCenter">
                <Link to="/un-jugador">
                <button type="button" className="btn btn-info">Un Jugador</button>
                </Link>
            </div>
            <div className="textCenter">
                <Link to="/dos-jugadores">
                <button type="button" className="btn btn-info">Dos Jugadores</button>
                </Link>
            </div>
        
        </div>
    )

}


export default Home;