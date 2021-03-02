import './App.css';
import Home from './Home';
import Nav from './Nav';
import AcheteurProduits from './components/Acheteur/Produits';
import AcheteurProduitDetails from './components/Acheteur/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VendeurSidebar from './components/Vendeur/Sidebar';
import { getCustomers } from "./ActorsFunctions";
import Login from "./components/Login/Login";
import Register from './components/Login/Register';

function App() {
  return (
    <>
      <Router>
       <Nav />
       <getCustomers />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/register'  component={Register} /> 
            <Route path='/acheteur/produits' component={AcheteurProduits} />
            <Route path='/acheteur/produit/detail:id' component={AcheteurProduitDetails} />
            <Route path='/vendeur/sidebar' component={VendeurSidebar} />
        </Switch>   
     </Router>
    </>
  );
}

export default App;
