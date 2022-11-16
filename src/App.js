import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Router } from './components/Router';
import { MainLayout } from './components/Layout';
import { LoginProvider } from './components/Login';
import { CarrProvider } from './components/Carrito';
 
function App() {

  //const {containerNavBar} = Css
  
 
  return ( 
    
    <div className = 'App'>
        <LoginProvider>
          <CarrProvider>
            <NavBar />
            
            <MainLayout>
              <Router />
            </MainLayout> 
          </CarrProvider>
        </LoginProvider>
    </div>
    );
  }

//<Componente />

export default App;
