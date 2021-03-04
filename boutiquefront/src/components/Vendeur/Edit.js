import React from 'react'

function edit() {
    
    // const[item, setItem] = useState(null);
    // const { state } = useLocation();
    // const [ customers, setCustomers ] = useState ([]);

    const onChange = (e) => {
        console.log('testtesttest')
        // e.persist();
        // setCustumers({...custumer, [e.target.title]: e.target.value});
       }
    return (
        <div>
           
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">modifier un produit</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                       {/*title  */}
                <div class="input-group m-2">
                  <span class="input-group-text">Produit</span>
                  <input type="text" onChange={onChange}  aria-label="First name" class="form-control" />
                </div>
                       {/* produit */}
                <div class="input-group m-2">
                  <span class="input-group-text">description</span>
                  <input type="text" onChange={onChange} aria-label="First name" class="form-control" />
                </div>
                       {/* Prix */}
                <div class="input-group m-2">
                  <span class="input-group-text">$</span>
                  <input type="text" aria-label="First name" onChange={onChange} class="form-control" />
                </div>
                       {/* image */}
                ​<picture>
                  <source srcset="..." type="image/svg+xml" />
                </picture>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit"  className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default edit
