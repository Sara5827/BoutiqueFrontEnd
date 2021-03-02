import React, { useEffect, useState } from 'react';
import './style.css';
import {getCustomers} from '../../ActorsFunctions';

function Produits() {
    const [ customers, setCustomers ] = useState ([]);


    useEffect(() => {
        getCustomers().then((res) => {
          setCustomers(res.data);
          console.log(res.data);
        });
      }, []);

    return (
        <div className="row justify-content-center" id="produits-card">
            
              {customers.map((item, index) => (
            <div class="col-sm-4">
              <div class="card mb-2" key={index}>
                    <a href="/acheteur/produit/detail">
                        <div  class="card-image"><img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Image_du_Maroc_3.jpg" alt="Orange" /></div>
                        <div class="card-body">      
                            <div class="card-date">
                             <time>{item.updated_at}</time>
                            </div> 
                            <div class="card-title">
                                <h4>{item.title} : <small>prix {item.prix}</small></h4>
                            </div> 
                            <div class="card-excerpt">
                                <p> {item.description}</p>
                            </div>
                        </div>        
                    </a>
                </div>
            </div> 
          ))}
         




        </div>
    )
}

export default Produits
