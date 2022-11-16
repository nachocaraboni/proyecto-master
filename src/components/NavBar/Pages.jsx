import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarrContext } from "../Carrito";
import { Css } from "./index";
import styles from "./Navbar.module.css";
export const Pages = () => {


    const {cartCount} = useContext(CarrContext)
    const menu = ["Inicio","Productos","Promociones","Nosotros", "Perfil","Carrito", "Contacto"];
    // const {ul} = Css
    const [active, setActive]=useState(window.location.pathname)

    function activeLink(item){
        const rutaActual =`/${item.toLowerCase()}`
        return active === rutaActual
        ? `fw-bold text-white ${styles.activo}`
        : null
    }

    function handleClick(item){
        const rutaActual =`/${item.toLowerCase()}`
        setActive(rutaActual)
    }

    return(
        <div className="navbar-nav">

        {cartCount>0 
            && 
            <Link 
                to='carrito'
                className="btn btn-light rounded-pill fs-6 fw-bold me-3"
            > 
            {cartCount}
            </Link>
            }
              {menu.map((opcion) => (
                
                  <Link
                    key={opcion}
                    className={`nav-link ${activeLink(opcion)} ${styles.navLink}`}
                    to={opcion.toLowerCase()}
                    onClick={() => handleClick(opcion)}
                  >
                    {opcion}
                  </Link>
                
              ))}
              
            </div>
    )
        {/* <ul className={ul}>

            {cartCount>0 
            && 
            <Link 
                to='carrito'
                className="btn btn-light rounded-pill fs-6 fw-bold me-3"
            > 
            {cartCount}
            </Link>
            }

           {menu.map(item =>
                <Link
                    key={item}
                    className ={`text-light px-5 py-2 text-decoration-none ${activeLink(item)}`}
                    to={item.toLowerCase()}
                    onClick = {() => handleClick(item)}
                >
                    {item}
                </Link>
           )}
        </ul>)
 */}

    
}

/*    const menu = ["Inicio","Promociones","Nosotros","Contacto"];
    const {cartcount}=useCarContext
    const {li} = Css
    const [active,setActive]= useState(window.location.pathname)
    function activelink(item){
        const rutaactual = `/${item.tolowercase()}`
        return active === rutaactual
        ? 'fw-bold bg-info'/*console.log(item,'si')*/
/*        : null /*console.log(item,'no')*/
/*    }
    function handleClick(item){
        const rutaactual = `/${item.tolowercase()}`
        setActive(rutaactual)

    }
    return(
        <ul className='align-self-center'>
            {cartcount>0 && <Link
                to=carrito
                className='btn'></Link>}
           {menu.map(item =>
           <Link
           key={item}
           className ={li} /*ver si el css lo pongo aca*/ 
/*           to={item.toLowerCase()}
           onClick = {() => handleClick(item)}>
           {item}
           </Link>
           )}
           </ul>)
        }*/
