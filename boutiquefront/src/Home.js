import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (
        <>
         <div className="row d-flex justify-content-center">
          <div className="col-sm-4">
             <div className="card">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSeGxOt5mBR32wSFlyzMA8fhquCujljyD6g&usqp=CAU"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Vendeur</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                    <a href="" className="btn btn-primary">Consulter</a>
                </div>
            </div>
             </div>
          <div className="col-sm-4">
            <div className="card">
                <img
                    src="https://image.freepik.com/vecteurs-libre/panier-illustration_23-2147513449.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Acheteur</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                    <a href="/acheteur/produits" className="btn btn-primary">Consulter</a>
                </div>
            </div>
         </div>
        </div> 
        </>
    )
}

export default Home
