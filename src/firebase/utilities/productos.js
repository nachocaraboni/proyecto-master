/*import { async } from "@firebase/util";
import { addDoc, collection, getDoc, getDocs, setDoc, updateDoc, where } from "firebase/firestore/lite";
import { firebasedb } from "../config";

//Referencia
const productosDb = collection(firebasedb,'productos')

// Agregar documento-addDoc
export const addProduct = (doc) => {
    return addDoc(productosDb, doc)
}

//Obtener los productos
export const getProducts = async() => {
    const collection = await getDocs(productosDb)
    const products = collection.docs.map(doc=>{
        return{...doc.data(),id:doc.id}
    })
    return products
}

// Agregar documentos
export const addProducts = (docs) => {
    docs.forEach(doc => addProduct(doc))
}

//Obtener producto por Id (de la coleccion)
export const getProductById = (id) =>{
    const itemRef = doc(firebasedb, 'productos', id)
    getDoc(itemRef) 
}

//Obtener producto por nombre 
export const getProductByName = async(name) =>{
    const dataRef = query(productosDb, where('nombre','==',))
    let found = await getDoc(dataRef)
    found = found.docs.map(doc=>doc.data())
    console.log(found)
}

//modificacion con set (si no lo encuentra lo crea)
export const setProduct = async(id, values, merge=false)
 const itemRef= doc(firebasedb, 'productos', id)
 setDoc(itemRef, values, {merge})

 //modificacion con Update 
 export const updateProduct = async(id,values) => {
    const itemRef = doc(firebasedb.app,'productos', id)
    updateDoc(itemRef,values)
}

//borrar contenido
export const deleteProduct = (id) =>{
    const itemRef 
}*/