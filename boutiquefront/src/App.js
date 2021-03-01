import './App.css';
import Home from './Home';
import Nav from './Nav';
import AcheteurProduits from './components/Acheteur/Produits';
import AcheteurProduitDetails from './components/Acheteur/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VendeurSidebar from './components/Vendeur/Sidebar';

function App() {
  return (
    <>
      <Router>
       <Nav />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/acheteur/produits' component={AcheteurProduits} />
            <Route path='/acheteur/produit/detail' component={AcheteurProduitDetails} />
            <Route path='/vendeur/sidebar' component={VendeurSidebar} />
        </Switch>   
     </Router>
    </>
  );
}

export default App;
