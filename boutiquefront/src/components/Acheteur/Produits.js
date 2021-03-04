import React, { useEffect, useState } from "react";
import "./style.css";
import { getCustomers } from "../../ActorsFunctions";
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Produits() {
  const [customers, setCustomers] = useState([]);
  const [item, setItem] = useState([]);
  const history = useHistory();


     useEffect(() => {
    getCustomers().then((res) => {
      setCustomers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="row justify-content-center " id="produits-card">
      {customers.map((item, index) => (
        <div class="col-sm-4 mt-5">
          <div class="card mb-2" key={index}>
          <Link to={`/acheteur/produit/detail${item.id}`}>
            <div class="card-image">
              <img
                width="100%"
                src={`http://localhost:8000/${item.image}`}
                alt="Orange"
              />
            </div>
          </Link>
              
            <div class="card-body ">
              <div class="card-title">
                <h4>
                  {item.title}
                </h4>
                <h5> <small> {item.prix} Dh</small> </h5>
              </div>
              <div class="card-excerpt" id="produits-description">
                <p> {item.description}</p>
              </div>
              <div class="card-date">
                <time>{item.updated_at}</time>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produits;
