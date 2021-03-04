import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StripeContainer from "../payement/StripeContainer";

function Details(props) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [showItem, setShowItem] = useState(false)

  let url = `http://localhost:8000/api/products/${productId}`;
  const getProduct = async () => {
    return await axios.get(url);
  };
  useEffect(() => {
    getProduct()
      .then((res) => {
        setProduct(res.data);
        console.log();
      })
      .catch((error) => {
        return error.response;
      });
  }, []);

  return (
    <>
      <div class="row justify-content-center mb-2">
        <div class="col-md-8">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                {product.title}{" "}
              </strong>
              <h3 class="mb-0">Featured post</h3>
              <div class="mb-1 text-muted">{product.prix}</div>
              <p class="card-text mb-auto">{product.description}</p>
              <div className="App">
                <h1>The Spatula Store</h1>
                {showItem ? <StripeContainer/> : <> <button onClick={() => setShowItem(true)}>payement</button></>}
            </div>
            </div>
            <div class="col-auto d-none d-lg-block">
            <div class="card-image">
              <img
                width="100%"
                src={`http://localhost:8000/${product.image}`}
                alt="Orange"
              />
            </div>
                {/* <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
