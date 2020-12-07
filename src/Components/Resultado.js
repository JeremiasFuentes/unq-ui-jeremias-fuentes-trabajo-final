import React from 'react';
const Resultado = (props) => {
    const {ganador,eleccionJ1,eleccionJ2,modo,onClick} = props
    return (
        <div className="background">
            <div>
                <div>
                    <h4 className="textCenter">{ganador}</h4>
                </div>
                <div className="textCenter">
                    <div>
                        Elección Jugador:  
                        <img src={eleccionJ1.imagen} width="100" alt={eleccionJ1.tipo}></img>
                    </div>
                    <div>
                        Eleccion {modo}:                          
                        <img src={eleccionJ2.imagen} width="100" alt={eleccionJ2.tipo}></img>
                    </div>
                </div>
                <div className="textCenter">
                    <button type="button" className="btn btn-info" onClick={onClick}>Jugar otra vez</button>
                </div> 
            </div>
        </div>
    );
  }
  
  export default Resultado;
