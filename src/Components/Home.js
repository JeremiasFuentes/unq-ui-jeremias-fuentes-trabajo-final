import React from 'react';
import {Link} from 'react-router-dom'
import "./Style.css"



const Home = () =>{


    return(
        <div className="pageStyle">
            <div className="textCenter">
            <img src="https://www.tribunahacker.com.ar/wp-content/uploads/2014/05/iconogrande.png" width={200}/>
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
            <div className="textCenter">
                <Link to="/reglas">
                <button type="button" className="btn btn-info">Reglas</button>
                </Link>
            </div>
        
        </div>
    )

}


export default Home;