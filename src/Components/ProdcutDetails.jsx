import React from 'react';
import { Link } from 'react-router-dom';


const ProdcutDetails = ({product}) => {
    const {_id,name, brand, type, photo, price, description, rating} = product
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
    <button><Link to={`/product/${_id}`}>See Details</Link></button>
  </div>
</div>

        </div>
    );
};

export default ProdcutDetails;