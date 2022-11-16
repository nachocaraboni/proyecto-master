import { useState } from "react"
import { createContext } from "react"


export const LoginContext = createContext()
export const LoginProvider = ({children}) =>{

    const [logged, setLogged] = useState(false)
    const [user,setUser]=useState(undefined)
    const [waiting, setWaiting] = useState(false)
    const [register,setRegister] = useState(false)

//  user demo:  const user = {name:'admin', pass:'admin'}

    function login(){
        setLogged(true)
    }

    function wait(){
        setWaiting(true)
    }

    function error(){
        setWaiting(false)
    }

    async function firebaseLogin(user){

        const{
            displayName,
            isAnonymous,
            photoURL,
            email,
            uid
        } = await user;

        if(uid && !isAnonymous){
            login()
            setUser({
                nombre: displayName,
                img:photoURL,
                email,
                uid
            }

            )

        }
    }

    function signup(){
        setRegister(!register)
    }

    function logout(){
        setLogged(false);
        setUser(undefined);
        error();
    }

    return(
        <LoginContext.Provider
            value={{
                firebaseLogin,
                logged,
                register,
                waiting,
                logout,
                signup,
                login,
                error,
                user,
                wait
            
            }}
        >            
            { children }
        </LoginContext.Provider>
    )
}


 



