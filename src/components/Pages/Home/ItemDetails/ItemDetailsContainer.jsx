import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../../../../hooks"
import {ItemDetail} from "./ItemDetail"

export const ItemDetailsContainer =() =>{
    
    const { id } = useParams()
    const { datos:item, loading} = useFetch(undefined, id)

    return (
        loading 
        ? <div className="spinner-border text-info" role = 'status' />
        : <ItemDetail item = { item } />
        
    )
   
}

/*    const[item,setItem] = useState([])
    const[loading,setLoading] = useState(true)

    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(data => {                
                setTimeout(() => {
                    const getItem = data.find(product => product.id === id)
                    setItem(getItem)
                    setLoading(false)
                },1500 )
            })
    },[id])
*/