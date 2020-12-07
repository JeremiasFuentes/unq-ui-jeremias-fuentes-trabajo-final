import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import "./Style.css"
import Resultado from "./Resultado"



const DosJugadores = () =>{


    const [puntosJugador1, setPuntosJugador1] = useState(0)
    const [puntosJugador2, setPuntosJugador2] = useState(0)
    const [eleccionJugador1, setEleccionJugador1] = useState(null)
    const [eleccionJugador2, setEleccionJugador2] = useState(null)
    const [ganador, setGanador] = useState("")
    const [resultados, setResultados] = useState(false)
    const [eleccion1 , setEleccion1] = useState(true)
    const [eleccion2 , setEleccion2] = useState(false)
  
    const opciones = [  {tipo:"Piedra", imagen:"https://rwest88.github.io/Rock-Paper-Scissors/assets/images/rock.png"},
                        {tipo:"Papel", imagen:"https://rwest88.github.io/Rock-Paper-Scissors/assets/images/paper.png"},
                        {tipo:"Tijeras", imagen:"https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-5.jpg"},
                        {tipo:"Lagarto", imagen: "https://rwest88.github.io/Rock-Paper-Scissors/assets/images/lizard.png"},
                        {tipo:"Spock", imagen:"https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-6.jpg"}]

    const procesarEleccionJugador1 = (eleccion) =>{
        setEleccionJugador1(eleccion)
        setEleccion1(false)
        setEleccion2(true)
    }
  
    const procesarEleccionJugador2 = (eleccion) =>{
      setEleccionJugador2(eleccion)
      if (eleccionJugador1.tipo === eleccion.tipo){
          setGanador("EMPATE",eleccion)
      }else if (ganaJugador1(eleccionJugador1.tipo,eleccion.tipo)){
          setGanador("GANÓ EL JUGADOR 1!!")
          setPuntosJugador1(puntosJugador1+1)
      }else { 
        setGanador("GANÓ EL JUGADOR 2!!"); 
        setPuntosJugador2(puntosJugador2+1)
      }
      setResultados(true)
      setEleccion2(false)
    } 
  
    const ganaJugador1 = (seleccionJ1,seleccionJ2) => {
        return (
        (seleccionJ1 === "Tijeras" && (seleccionJ2==="Papel"   || seleccionJ2==="Lagarto")) ||
        (seleccionJ1 === "Papel"   && (seleccionJ2==="Piedra"  || seleccionJ2==="Spock"))   ||
        (seleccionJ1 === "Piedra"  && (seleccionJ2==="Lagarto" || seleccionJ2==="Tijeras"))  ||
        (seleccionJ1 === "Lagarto" && (seleccionJ2==="Spock"   || seleccionJ2==="Papel"))   ||
        (seleccionJ1 === "Spock"   && (seleccionJ2==="Tijeras" || seleccionJ2==="Piedra")))
    }
  
    const resetear = () =>{
      setGanador("")
      setEleccionJugador1("")
      setEleccionJugador2("")
      setEleccion1(true)
      setEleccion2(false)
      setResultados(false)
    }
  
      return(
          <div className="pageStyle">
              <div className="textCenter">
                  <h1 className="title">Piedra, Papel, Tijera, Lagarto o Spock</h1>
              </div>
              <h4 className="textCenter">Victorias Jugador 1: {puntosJugador1} </h4>
              <h4 className="textCenter">Victorias Jugador 2: {puntosJugador2} </h4>
              {eleccion1 && (
                  <div>
                    <div className="textCenter">
                        <h1>Turno del Jugador 1 ,Selecciona uno:</h1>
                    </div>
                    <div class="row elecciones">
                            {opciones.map ( eleccion => (
                                    <div key={eleccion.tipo} className="eleccion">
                                        <img src={eleccion.imagen}  onClick={()=>procesarEleccionJugador1(eleccion)} width="100" alt={eleccion.tipo}></img>
                                    </div> 
                                ))}
                        </div>
                    </div>)}

                {eleccion2 && (
                  <div>
                    <div className="textCenter">
                        <h1>Turno del Jugador 2 ,Selecciona uno:</h1>
                    </div>
                    <div class="row elecciones">
                            {opciones.map ( eleccion => (
                                    <div key={eleccion.tipo} className="eleccion">
                                        <img src={eleccion.imagen}  onClick={()=>procesarEleccionJugador2(eleccion)} width="100" alt={eleccion.tipo}></img>
                                    </div> 
                                ))}
                        </div>
                    </div>)}    
                
                <div>
                      {resultados && <Resultado ganador={ganador} eleccionJ1={eleccionJugador1} eleccionJ2={eleccionJugador2} modo="Jugador 2" onClick={()=>resetear()}/>}
               </div>
          
          </div>
      )
  
  }


export default DosJugadores;