import React, { useState } from 'react'
import styles from './ItemList.module.css'

export const FiltrarBar = ( {setFiltro}) => {

const categorias = ["Alfajores", "Caramelos y gomitas", "Chicles", "Chocolate"]
const initialState = { categoriaSeleccionada: "" };

const [form, setForm] = useState(initialState);


function handleChange(e){
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
}

function handleSubmit(e) {
  e.preventDefault()
  setFiltro(form.categoriaSeleccionada)
    
}


  return (
    <div className="navbar">
        <div className={`navbar-brand text-white ${styles.cursiva}`}>Nuestros productos</div>
        <form className="d-flex">
        <button className={`btn mx-1 ${styles.verde}`} type="button" onClick={handleSubmit}>
            Filtrar
          </button>
          <select className="form-select me-2" type="search" id='cate' name="categoriaSeleccionada" onChange={handleChange}>
            <option defaultValue>Categorías</option>
            <option value="">Todas</option>
            {categorias.map((cat) =>
              (<option value= {cat} >{cat}</option>
              )
            )}
           
          </select>

        </form>
      </div>
  )
}
