import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiltrarBar } from "./FiltrarBar";
import { Item } from "./Item";

export const ItemList = ({ datos }) => {


  const [filtro, setFiltro] = useState("");
  const datosFiltrados = filtro ? filtrarDatos() : datos;
  console.log(datosFiltrados);

  function filtrarDatos() {
    return datos.filter((dato) => dato.categoria === filtro);
  }


  return (
    <div className="d-flex flex-column mb-0 mx-4 w-100">
      <FiltrarBar setFiltro = {setFiltro} />
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-3 m-1">
      {datosFiltrados.map((item) => (
        <Link
          key={item.id}
          to={`/item/${item.id}`}
          className="text-decoration-none"
        >
          <Item item={item} />
        </Link>
      ))}
    </div>
    </div>
  );
};
