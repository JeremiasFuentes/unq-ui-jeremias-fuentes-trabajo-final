import React, { useState,useEffect } from "react";
import "./Style.css"
import Resultado from "./Resultado"



const UnJugador = () =>{

  const [puntosJugador, setPuntosJugador] = useState(0)
  const [puntosComputadora, setPuntosComputadora] = useState(0)
  const [eleccionJugador, setEleccionJugador] = useState(null)
  const [eleccionComputadora, setEleccionComputadora] = useState(null)
  const [ganador, setGanador] = useState("")
  const [resultados, setResultados] = useState(false)

  const opciones = [  {tipo:"Piedra", imagen:"https://rwest88.github.io/Rock-Paper-Scissors/assets/images/rock.png"},
                      {tipo:"Papel", imagen:"https://rwest88.github.io/Rock-Paper-Scissors/assets/images/paper.png"},
                      {tipo:"Tijeras", imagen:"https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-5.jpg"},
                      {tipo:"Lagarto", imagen: "https://rwest88.github.io/Rock-Paper-Scissors/assets/images/lizard.png"},
                      {tipo:"Spock", imagen:"https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-6.jpg"}]

  const procesarEleccion = (eleccion) =>{
    let eleccion2 = random_item(opciones)
    if (eleccion.tipo === eleccion2.tipo){
        setGanador("EMPATE",eleccion)
    }else if (ganaJugador(eleccion.tipo,eleccion2.tipo)){
        setGanador("GANASTE!!")
        setPuntosJugador(puntosJugador+1)
    }else { 
      setGanador("PERDISTE"); 
      setPuntosComputadora(puntosComputadora+1)
    }
    setEleccionJugador(eleccion)
    setEleccionComputadora(eleccion2)
    setResultados(true)
  } 

  const ganaJugador = (seleccionJ,seleccionC) => {
      return (
      (seleccionJ === "Tijeras" && (seleccionC==="Papel"   || seleccionC==="Lagarto")) ||
      (seleccionJ === "Papel"   && (seleccionC==="Piedra"  || seleccionC==="Spock"))   ||
      (seleccionJ === "Piedra"  && (seleccionC==="Lagarto" || seleccionC==="Tijeras"))  ||
      (seleccionJ === "Lagarto" && (seleccionC==="Spock"   || seleccionC==="Papel"))   ||
      (seleccionJ === "Spock"   && (seleccionC==="Tijeras" || seleccionC==="Piedra")))
  }

  const random_item = (opciones) =>{
    return opciones[Math.floor(Math.random()*opciones.length)];   
  }

  const resetear = () =>{
    setGanador("")
    setEleccionJugador("")
    setEleccionComputadora("")
    setResultados(false)
  }

    return(
        <div className="pageStyle">
            <div className="textCenter">
                <h1 className="title">Piedra, Papel, Tijera, Lagarto o Spock</h1>
            </div>
            <h4 className="textCenter">Victorias: {puntosJugador} </h4>
            <h4 className="textCenter">Derrotas: {puntosComputadora} </h4>
            {!resultados && (<div>
              <div className="textCenter">
                  <h1>Selecciona uno:</h1>
              </div>
              <div class="row elecciones">
                      {opciones.map ( eleccion => (
                              <div key={eleccion.tipo} className="eleccion">
                                  <img src={eleccion.imagen}  onClick={()=>procesarEleccion(eleccion)} width="100" alt={eleccion.tipo}></img>
                              </div> 
                          ))}
                </div>
                </div>)}
              <div>
                    {resultados && <Resultado ganador={ganador} eleccionJ1={eleccionJugador} eleccionJ2={eleccionComputadora} modo="Computadora" onClick={()=>resetear()}/>}
             </div>
        
        </div>
    )

}


export default UnJugador;