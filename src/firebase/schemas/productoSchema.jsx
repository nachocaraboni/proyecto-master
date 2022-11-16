import PropTypes from 'prop-types'
import { stringValidator } from '../utilities/validadores'
export const Componente = ({variable})=>{

    return(
        <div></div>
    )
}

//Componente.PropTypes={
    variable:PropTypes.string
//}
/*export const productoSchema = (item) => {
    const {id,nombre,descripcion, marca, imagen,precio} = item
    let confirm=true;

    const validation ={
        id:stringValidator(id),
        nombre:stringValidator(nombre),
        descripcion:stringValidator(descripcion),
        marca:stringValidator(marca),
        imagen:stringValidator(imagen),
        precio:stringValidator(precio),
    }

    const values = object.values(validation)
    
    for (let value of values) {
        if (!value) confirm = false 
    }
    console.log(confirm)

    return confirm
}*/