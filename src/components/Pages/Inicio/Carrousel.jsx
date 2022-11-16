import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";

export const Carrousel = ({ datosDestacados }) => {
  return (
    <Carousel variant="dark" className={styles.carrousel}>
      {datosDestacados.map((item) => (
        <Carousel.Item>
          <img
            className={` w-100 ${styles.imagenCarrousel}`}
            src={item.imagen}
            alt={item.imagen}
          />
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="text-decoration-none"
          >
            <Carousel.Caption className={styles.fondoOpaco}>
              <div>
                <h5>{item.nombre}</h5>
                <p>{item.descDestacado}</p>
              </div>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
