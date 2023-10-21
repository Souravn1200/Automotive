
import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from './Providers/AuthProvider';

const ProductEachDeatils = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const id = useParams();
    // const myData = useLoaderData();
    const {_id,name, brand, type, photo, price, description, rating} = useLoaderData();


const handleAddToCart = async () =>{
    const cart = {name, brand, type, photo, price, description, rating, email};
    await fetch('https://automotive-server-theta.vercel.app/cart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cart)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

        if (data.insertedId) {
            swal("Done!", "Your Product was added to the Cart", "success")
        }
       
    })


}

    return (
        <div>

            {/* {console.log(myData)} */}
        {
//             myData.map(data => (
//                 <div key={data._id}>
//                     <>
//                     <div className="card card-compact mx-auto bg-base-100  mt-8">
//   <figure><img src={data.photo} alt="Shoes" className='w-[900px] h-[400px] rounded'/></figure>
//   <div className="card-body mx-28">
//     <h2 className="card-title">{data.name}</h2>
//     <p>{data.description}</p>
//     <p><span className='font-bold'>Type</span> : {data.type}</p>
//     <p><span className='font-bold'>Price</span> : {data.price}</p>
//     <p><span className='font-bold'>Rating</span> : {data.rating}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-success" onClick={handleAddToCart}>Add to cart</button>
      
//     </div>
//   </div>
// </div>
//                     </>
//                 </div>
//             ))




<div className="card card-compact mx-auto bg-base-100  mt-8">
<figure><img src={photo} alt="Shoes" className='w-[900px] h-[400px] rounded'/></figure>
<div className="card-body mx-28">
  <h2 className="card-title">{name}</h2>
  <p>{description}</p>
  <p><span className='font-bold'>Type</span> : {type}</p>
  <p><span className='font-bold'>Price</span> : {price}</p>
  <p><span className='font-bold'>Rating</span> : {rating}</p>
  <div className="card-actions justify-end">
    <button className="btn btn-success" onClick={handleAddToCart}>Add to cart</button>
    
  </div>
</div>
</div>

        }
    </div>
    );
};

export default ProductEachDeatils;