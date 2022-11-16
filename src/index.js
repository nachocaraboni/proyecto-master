import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addProduct, setProduct } from './firebase/utilities/productos';

//agrega productos a la base de datos(con cntrl s se guarda)

//let producto ={nombre:'Juan', edad:15};
//addProduct(producto).then(res=>console.log(res.id))

//const name = 'Oriental Cotton'
//getProductByName(name)

/*const product = {nombre:'papas', precio:'50'}
setProduct(id,product)*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);