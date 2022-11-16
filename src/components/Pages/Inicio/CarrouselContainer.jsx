import React from "react";
import gif from "./../../../assets/Img/cargando5.gif"
import ticket from "./../../../assets/Img/golden-ticket.png"
import { useFetch } from "../../../hooks";
import { Carrousel } from "./Carrousel";
import styles from "./Inicio.module.css"


export const CarrouselContainer = () => {
  const { datos, loading } = useFetch();
  const datosDestacados = datos.filter((dato)=>dato.destacado)
  console.log(datosDestacados)

  return (
  <div className={`d-flex flex-column align-items-center m-0 w-100 mt-2 `}>
    
    <div className="d-flex">
    <img src={ticket} alt="ticket" className={styles.ticket}/>
    <h2 className="m-2 text-white"> Destacados</h2>    
    </div>
  {loading ? (
    <img height="500" width="500" src={gif} alf={gif} />
  ) : (
    <Carrousel  datosDestacados={datosDestacados} />
  )}
  </div>)
};
