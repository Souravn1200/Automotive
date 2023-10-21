import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import swal from 'sweetalert';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(`https://automotive-server-theta.vercel.app/cart/${email}`)
            .then((res) => res.json())

        .then((data) => { 


            console.log(data);  
          setCartData(data);  
        })
    }
  }, [email]);

  const handleDelete = _id => {

    fetch(`https://automotive-server-theta.vercel.app/cart/${_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify()
    })

    .then(res => res.json())
    .then(data => {

      console.log(data);

      if (data.deletedCount > 0) {
        swal("Poof! Product has been deleted!", {
          icon: "success",
        });
      }

      // const remainig = renderingProduct.filter(rp=> rp._id !== _id)
      // setrenderingProduct(remainig)
    })
    console.log(_id);
  }

  return (
    <div className='mx-auto w-[1200px]'>
      <div className="carousel w-full mt-5">
  <div id="slide1" className="carousel-item relative w-full h-[500px]">
    <img src="https://i.ibb.co/0Q9tsZF/1697874809960.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[500px]">
    <img src="https://i.ibb.co/GWv5rDm/Screenshot-2023-10-21-163031.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[500px]">
    <img src="https://i.ibb.co/rdrBFZH/c3.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[500px]">
    <img src="https://i.ibb.co/0Q9tsZF/1697874809960.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    {cartData.length > 0 ? (
      <div className='grid lg:grid-cols-3 gap-2 mt-6'>
        {cartData?.length && cartData?.map((item) => (
          <div key={item?._id} >
            <div className='mx-auto mt-4'>
           
           <div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={item?.photo} alt="Shoes" /></figure>
<div className="card-body">
 <h2 className="card-title">
   {item?.name}
   <div className="badge badge-secondary">{item?.price}</div>
   <div className="badge badge-secondary">{item?.rating}</div>
 </h2>
 <p>{item?.description}</p>
 <div className="card-actions justify-end">
   <div className="badge badge-outline">{item?.brand}</div> 
   <div className="badge badge-outline">{item?.type}</div> 
 </div>
 <div className='flex gap-5 mt-5'>

 
 
 <button className='btn btn-warning' onClick={() => handleDelete(item._id)}> Delete </button>
 
 
 </div>


</div>

</div>

     </div>
          </div>
        ))}
      </div>
    ) : (
      <div>
        <p className='mx-auto'>Your cart is empty.</p>
      </div>
    )}
  </div>
  );
};

export default Cart;
