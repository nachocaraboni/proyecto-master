import { useState } from "react"
import { commonRegistration } from "../../firebase/providers/providers"

export const Register = ({ signup, waiting, firebaseLogin }) => {

    const[form, setForm] = useState({name:'',pass:''});

    function handleInputChange(e){
        const {name, value} = e.target
        setForm({...form,[name]:value})    
    }

    function checkForm(e) {
        e.preventDefault();
        const { name, pass }=form
        if(name!=='' && pass!== ''){

            const user= commonRegistration( name, pass);
            firebaseLogin(user)

        }
    
    }

   

    return(
        <form name='login'>
        <h1 className="my-5">Registrarse</h1>
        <div className="form-floating mb-3">
            <input 
            name="name"
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={ handleInputChange }
            />
            <label htmlFor="floatingInput">Email</label>
        </div>

        <div className="form-floating">
            <input 
                name="pass"
                type="password"
                className="form-control"
                id="floatingPassword"
                onChange={ handleInputChange }
            />
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="container mt-4">        
            <button
                disabled={waiting}
                className="row w-100 btn btn-primary my-1"
                onClick={checkForm}
            >
                Registarse
            </button>
        </div>
            
            <button
                className="btn link-secondary"
                onClick={ signup }
            >
                Loguearse
            </button>
    </form>
    )
}