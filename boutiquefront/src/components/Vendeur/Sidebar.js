import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { getCustomers } from "../../ActorsFunctions";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Addproduct from "./Addproduct";

function Sidebar() {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  const editProduct = (event) => {
    const id = event.target.id;
    // console.log(event.target.id);
    history.push({
      pathname: "/vendeur/produits/edit/",
    });
  };

  const handleAdd = (event) => {
    // console.log(event);
    let url = `http://localhost:8000/api/teststore`;
    axios.get(url).then((res) => {
      console.log(res);
    });
  };

  const handleDelete = (event) => {
    const id = event.target.id;
    let url = `http://localhost:8000/api/testdelete/${id}`;

    axios.delete(url).then((res) => {
      const del = customers.filter((customers) => id !== customers.id);
      setCustomers(del);
      console.log("res", res);
    });
  };

  useEffect(() => {
    getCustomers().then((res) => {
      setCustomers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Addproduct />

      {/* Table */}
      <div>
        <table width="" className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">produit</th>
              <th scope="col">prix</th>
              <th scope="col">description</th>
              <th scope="col">image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item, index) => (
              <>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.prix}</td>
                  <td>{item.description}</td>
                  <td>
                    {" "}
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      width="100px"
                    />{" "}
                  </td>
                  <td>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      variant="primary"
                      id={item.id}
                      onClick={editProduct}
                    >
                      Edit
                    </button>
                    <button id={item.id} onClick={handleDelete}>
                      {" "}
                      delete{" "}
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}

export default Sidebar;
