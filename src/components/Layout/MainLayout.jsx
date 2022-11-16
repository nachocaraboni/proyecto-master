import styles from "./Layout.module.css"

export const MainLayout =({children}) =>{

    return(
        <div 
            className={`container-fluid d-flex justify-content-center bg-light m-0 mt-5 pt-3 ${styles.fondo} ${styles.scroll}`}
              
        >
            {children}
        </div>


    )
}

