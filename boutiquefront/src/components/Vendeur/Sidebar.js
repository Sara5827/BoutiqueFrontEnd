import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import {getCustomers} from '../../ActorsFunctions';
import axios from "axios";

function Sidebar() {
    const [ customers, setCustomers ] = useState ([]);
    
    // const handleDelete = (id) => {
    //    console.log(id);
    // }

    const handleDelete = (event) => {

        //  console.log(event.target.id);
         const id = event.target.id;
        let url = `http://localhost/3wa/RFC-Digital/Boutique/public/api/testdelete/${id}`

        axios.delete(url).then(res => {
            const del = customers.filter(customers => id !== customers.id)
            setCustomers(del)
            console.log('res', res)
        })
    }
    useEffect(() => {
        getCustomers().then((res) => {
          setCustomers(res.data);
          console.log(res.data);
        });
      }, []);


 
    return (
        <>
           <div class="table-title" >  
        	<div class="row">
					<div class="col-sm-6">
						<h2>Vendeur <b>Employees</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons"></i> <span>Add Produit</span></a>
						{/* <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons"></i> <span>Delete</span></a>						 */}
					</div>
				</div>
			</div>
            {/* Table */}
            <div >
            <table width="" class="table" >
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
                <td> <img src={`http://localhost/3wa/RFC-Digital/Boutique/public/${item.image}`} width="100px"  />  </td>
                <td>
                <a href="#edit" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="" data-original-title="Edit"></i></a>
                <button id={item.id} onClick={handleDelete} > delete  </button>
                </td>
              </tr>
              
            </>
          ))}
        </tbody>   
          <tbody>        
        </tbody>
    </table>

            </div>
          
        </>
    )
}

export default Sidebar
