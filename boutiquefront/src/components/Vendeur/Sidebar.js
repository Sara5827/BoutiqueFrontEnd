import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import {getCustomers} from '../../ActorsFunctions';

function Sidebar() {
    const [ customers, setCustomers ] = useState ([]);
    
    const handleDelete = (id) => {
       console.log(id);
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
            <th scope="col">Name</th>
            <th scope="col">Produits</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
        {customers.map((item, index) => (
            <>
              
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                <a href="#edit" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="" data-original-title="Edit"></i></a>
                <a href="#delete" id={item.id} onClick={handleDelete} key={item.id}  class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="" data-original-title="Delete"></i></a>
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
