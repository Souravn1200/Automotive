import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const ProdcutDetails = ({product, renderingProduct, setrenderingProduct}) => {

    const {_id,name, brand, type, photo, price, description, rating} = product

    const handleDelete = _id => {
console.log(_id);
swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover it!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    
    fetch(`http://localhost:5000/products/${_id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.deletedCount > 0) {
        swal("Poof! Product has been deleted!", {
          icon: "success",
        });
      }

      const remainig = renderingProduct.filter(rp=> rp._id !== _id)
      setrenderingProduct(remainig)
    })
  } 
  // else {
  //   swal("Your imaginary file is safe!");
  // }


});
    }


    return (
    
        <div className='mx-auto mt-4'>
           
              <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{price}</div>
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{brand}</div> 
      <div className="badge badge-outline">{type}</div> 
    </div>
    <div className='flex gap-5 mt-5'>
    <Link to={`/product/${_id}`}><button className='btn btn-accent'>See Details</button></Link>
    <button className='btn btn-warning' onClick={() => handleDelete(_id)}> Delete </button>
    <Link to={`/update/${_id}`}><button className='btn btn-neutral'> Update </button></Link>
    
    </div>
 

  </div>
  
</div>

        </div>
    );
};

export default ProdcutDetails;