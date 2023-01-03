import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { firebaseAuth } from '../config/config'


const googleProvider = new GoogleAuthProvider()

function userProfile(user){

    const {displayName, isAnonymous, photoURL, email, uid} = user;
    return{displayName, isAnonymous, photoURL, email, uid}


}

export const signInWithGoogle = async (error) => {
    try{
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        //const credential = GoogleAuthProvider.credentialFromResult(result)
        return userProfile(result.user)
      
    //console.log(result)
    }
    catch (err){
        error()
        console.log('Error de autenticación con Google',err)
        
    }
}

export const commonRegistration = async (name, pass, error) => {
    try{
        const result = await createUserWithEmailAndPassword(firebaseAuth, name, pass)
    //        const credential = GoogleAuthProvider.credentialFromResult(result)
        return userProfile(result.user);
    }
    catch (err){
        error()
        console.log('Error en el registro:',err)
        
    }
}

export const commonLogin = async(name,pass,error) => {
    try{
        const result = await signInWithEmailAndPassword(firebaseAuth, name, pass)
    //    const credential = GoogleAuthProvider.credentialFromResult(result)
        return userProfile(result.user) 
    }
    catch (err){
        error()
        console.log('Error en el login:',err)
        
    }
}
