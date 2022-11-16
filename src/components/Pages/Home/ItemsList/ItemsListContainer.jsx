import gif from './../../../../assets/Img/cargando5.gif'
import { useFetch } from "../../../../hooks"
import { ItemList } from "./ItemList"

export const ItemListContainer =() =>{
    
        const {datos, loading} = useFetch()
        

        return(           
            loading 
                ?<img height='500' width='500' src={gif} alf={gif} />
                :<ItemList datos={datos} />

    )
}

/*    

     const [datos,setDatos]= useState([])
        const [loading,setLoading] = useState(true)

        useEffect(()=>{
            fetch(api('mock'))
                .then(res => res.json())
                .then(data =>console.log(data))
            
/*            async function getData(){
                let data 
                data = await fetch(api('mock')) /*o 'db.json'*/
/*                data = await data.json()
                console.log(data)
                setLoading(false)
                setDatos(data)
            }

            setTimeout(()=>{
                getData()
            },1000);
               
        },[])
*/