import React, { useState } from "react";
import axios from 'axios'
export default function Addproduct() {
  const [data, setData] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const fileInput = React.createRef();

  const onFileChange = (e) => {
    setSelectedImage(fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
  };
//   const newProduct = {
//     title: data.title,
//     description: data.description,
//     prix: data.prix,
//     image: selectedImage,
//   };
 const AddProduct = async (data) => {

    const formData = new FormData();
    formData.set("title",data.title);
    formData.set("description",data.description);
    formData.set("prix", data.prix);
    formData.set("image","selectedImage.png");
    return ( await  axios({
            method: 'post',
            url: `http://localhost:8000/api/customers`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
    )}


//  const AddProduct = async (data) => {
//     const api = axios.create({
//       baseURL: `http://localhost:8000/api/customers`,
//     });
//     return await api.post("/", JSON.stringify(data));
//   };

  const handleAdd = (data) => {
    AddProduct(data)
      .then((res) => {
          console.log('response')
        console.log(res);
      })
      .catch((err) => console.log(err));
      console.log(data);
    console.log("newProduct");
    // console.log(newProduct);
  };

//   export  const AddProduct = async (data) => {

//       const formData = new FormData();
//       formData.set("title",data.title);
//       formData.set("description",data.description);
//       formData.set("prix", data.prix);
//       return ( await  Axios({
//               method: 'post',
//               url: 'http://localhost:8000/api/recette/products/customers',
//               data: formData,
//               headers: {'Content-Type': 'multipart/form-data' }
//               })
//       )}

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Vendeur <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Ajouter un produit
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ajouter un produit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/*title  */}
              <div className="input-group m-2">
                <label className="input-group-text">Produit</label>
                <input
                  type="text"
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  aria-label="First name"
                  className="form-control"
                />
              </div>
              {/* produit */}
              <div className="input-group m-2">
                <label className="input-group-text">description</label>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
              </div>
              {/* Prix */}
              <div className="input-group m-2">
                <label className="input-group-text">prix</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setData({ ...data, prix: e.target.value })}
                />
              </div>

              {/* Image */}
              <div className="input-group m-2">
                <label className="input-group-text">uploadImage</label>
                <input
                  type="file"
                  ref={fileInput}
                  className="form-control"
                  onChange={onFileChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                // id={item.id}
                onClick={handleAdd}
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
