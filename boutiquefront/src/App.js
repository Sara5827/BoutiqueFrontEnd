import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import AcheteurProduits from "./components/Acheteur/Produits";
import AcheteurProduitDetails from "./components/Acheteur/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VendeurSidebar from "./components/Vendeur/Sidebar";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Edit from "./components/Vendeur/Edit";



function App() {
  return (
    <>
      <Router>
        <Nav />
        <getCustomers />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/acheteur/produits" exact component={AcheteurProduits} />
          <Route
            path="/acheteur/produit/detail:productId"
            exact
            component={AcheteurProduitDetails}
          />
          <Route path="/vendeur/sidebar" exact component={VendeurSidebar} />
          <Route path="/vendeur/produits/edit" exact component={Edit} />
        </Switch>
        {/* <Footer />   */}
      </Router>
    </>
  );
}

export default App;
