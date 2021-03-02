import React, { useEffect, useState } from 'react';
import './style.css';
import {getCustomers} from '../../ActorsFunctions';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

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
                   
                        <div  class="card-image"><img width="100%" src={`http://localhost/3wa/RFC-Digital/Boutique/public/${item.image}`} alt="Orange" /></div>
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
                            <Link 
                            to={`/acheteur/produit/detail${item.id}`}
                             > Consulter </Link>
                        </div>        
                    

                </div>
            </div> 
          ))}
         




        </div>
    )
}

export default Produits
