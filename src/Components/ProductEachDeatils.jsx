
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductEachDeatils = () => {
    const id = useParams();

const myData = useLoaderData();

    return (
        <div>
        {
            myData.map(data => (
                <div key={data._id}>
                    <>
                    <div className="card card-compact mx-auto bg-base-100  mt-8">
  <figure><img src={data.photo} alt="Shoes" className='w-[900px] h-[400px] rounded'/></figure>
  <div className="card-body mx-28">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.description}</p>
    <p><span className='font-bold'>Type</span> : {data.type}</p>
    <p><span className='font-bold'>Price</span> : {data.price}</p>
    <p><span className='font-bold'>Rating</span> : {data.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-success">Add to cart</button>
      
    </div>
  </div>
</div>
                    </>
                </div>
            ))
        }
    </div>
    );
};

export default ProductEachDeatils;