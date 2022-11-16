import { useContext, useState } from "react"
import { CarrContext } from "./CarrContext";

export const CartBox = ({item}) =>{

    const [count, setCount]= useState(0);
    const {addproducts} = useContext(CarrContext);

    function add(){
         setCount(count + 1) 
    }

// agregar limitación stock stock>0 &&

    function remove(){
        count>0 && setCount(count - 1)
    }

    function reset(){
        setCount(0)
    }


    return(
        <div className="container">
            <div className="row gap-2">

                {/*Restart*/}
                <div className="col-1 align-end">
                    <button
                        className="btn btn-outline-danger"
                        onClick={remove}>
                            -1
                    </button>
                </div>

                <div className="col">
                    <h5 className="text-center">
                       Cantidad: {count} unidad/es
                    </h5>

                </div>

                {/*Agregar */}
                <div className="col-1 align-end">
                    <button
                        className="btn btn-outline-primary"
                        onClick={add}>
                            +1
                    </button>
                </div>
            </div>

            <br />

            <div className="row gap-2 align-self-center">
                <button
                    className="btn btn-outline-secondary"
                    onClick={reset}
                >
                    Reiniciar
                </button>
                <button
                    className="btn btn-outline-secondary"
                    onClick={ () => addproducts(count,item)}
                >
                    Agregar al carrito
                </button>
            </div>


        </div>
        
    )

}