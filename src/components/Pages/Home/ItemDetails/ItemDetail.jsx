import { CartBox } from "../../../Carrito"
import { Detail } from "./Detail"


export const ItemDetail = ({item}) => {

    const {id, nombre,marca, descripcion,imagen, precio} = item

    console.log(item)
    return(
        <div className="bg-light m-0">
           <h1>{nombre}</h1>
            <h3>{marca}</h3>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <img src={imagen} alt={nombre}/>
                    </div>
                    <div className="col align-self-center">
                        <div className="text-start">
                            <h4>Descripción del producto</h4>
                            <p style={{textAlign: 'justify'}}>{descripcion}</p>
                            <br />

                            <h6>ID del producto:</h6>
                            <small>{id.substring(0,25)}...</small>
                            <br /><br />

                            <h4>Precio:</h4>
                            <p>{precio}</p>
                            <Detail />
                            <hr />
                            <CartBox item={item} />

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}