import styles from "./ItemList.module.css"


export const Item = ({item}) =>{

    const {nombre,imagen,precio,marca,descripcion} = item

    return(


        <div className={`card ${styles.shadow}`} >
        <img src={imagen} className="card-img-top" alt={imagen}/>
        <div className="card-body">
            <h5 className={`card-title ${styles.letraBordo}`}>{nombre}</h5>
            <p className={`card-text  ${styles.letraVerde}`}>${precio}</p>
             
        </div>
    </div> 
         
/*             <div className="card">
                <img src={imagen} className="card-img-top" alt={imagen}/>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">${precio}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{marca}</small>
                    </div>
  
            </div> */
        
     
    )
}