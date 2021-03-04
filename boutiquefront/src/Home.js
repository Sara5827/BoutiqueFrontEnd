import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (
        <>
         <div className="row d-flex justify-content-center">
          <div className="col-sm-4">
             <div className="card">
                <img
                    src="https://image.freepik.com/vecteurs-libre/vendeur-femme-client-illustration-shop-store-market-shopping-commerce-retail-acheter-payer_24877-60375.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body d-flex justify-content-center">
                    {/* <h5 className="card-title">Vendeur</h5> */}
                    <Link to="/vendeur/sidebar" className="btn btn-primary">Consulter la page des vendeurs</Link>
                </div>
            </div>
             </div>
          <div className="col-sm-4">
            <div className="card">
                 <div >
                 <img 
                    id="imagehome"
                    src="https://clipartart.com/images/banco-de-imagens-gratis-clipart.jpg"
                    className="card-img-top w-100"
                    alt="..."
                />
                 </div>
                <div className="card-body d-flex justify-content-center">
                    {/* <h5 className="card-title">Acheteur</h5> */}
                    <Link to="/acheteur/produits" className="btn btn-primary"> Consulter la page des acheteurs</Link>
                </div>
            </div>
         </div>
        </div> 
        </>
    )
}

export default Home
