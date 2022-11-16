import { useContext } from "react"
import { LoginContext } from "../Login"
import { Login } from "../Login"

export const LoginLayout = ({children})=>{
    
    
    const {logged} = useContext(LoginContext)

    
    return logged
    ? children
    : <Login />

}
       
    
