import { createContext, useState } from "react"

export const CarrContext = createContext()

export const CarrProvider =({children})=>{
    
// el children es para seguir viendo el NavBar

    const[cartCount, setCartCount]=useState(0)
    const[items, setItems]=useState([])

    function addproducts(value,item){

        if (value>0){
            setCartCount(cartCount+value)
            setItems([...items,
            {...item, cantidad:value}])

        }

    }
    return(

        <CarrContext.Provider
            value={ {
                addproducts,
                cartCount,
                items
            } }
        >
            {children}
            
        </CarrContext.Provider>

    ) 
    
}