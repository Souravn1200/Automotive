import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const ProductUpdate = () => {

    const product = useLoaderData();
    const {_id,name, brand, type, photo, price, description, rating} = product;



    const handleProductUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name') 
        const brand = form.get('brand')
        const type =  form.get('type');
        const photo = form.get('photo');
        const price = form.get('price');
        const description = form.get('description');
        const rating = form.get('rating');

        const updatedProduct =  {name, brand, type, photo, price, description, rating}
        console.log(updatedProduct);

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            swal("Congratulations!", "Your Product was updated", "success")
            console.log(data);
        })

    }

    return (

        
        <div>
            
        <form onSubmit={handleProductUpdate} className=" md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className='mt-5 mb-5 font-bold'>Update Product</h1>
           <div className='flex gap-60'> 
           <div> 
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Name</span>
               </label>
               <input type="text" required name="name" defaultValue={name} placeholder="Name" className="input input-bordered" />
           </div>

           <div className="form-control">
               <label className="label">
                   <span className="label-text">Brand Name</span>
               </label>
               <input type="text" required name="brand"  defaultValue={brand} placeholder="brand" className="input input-bordered" />
           </div>

           <div className="form-control">
               <label className="label">
                   <span className="label-text">Product Type</span>
               </label>
               <input type="text" required name="type"  defaultValue={type} placeholder="type" className="input input-bordered" />
           </div>

          
           </div>
           <div> 
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Price</span>
               </label>
               <input type="text" required name="price"  defaultValue={price} placeholder="price" className="input input-bordered" />
           </div>
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Description</span>
               </label>
               <input type="text" required name="description"  defaultValue={description} placeholder="description" className="input input-bordered" />
              
           </div>

           <div className="form-control">
               <label className="label">
                   <span className="label-text">Rating</span>
               </label>
               <input type="text" required name="rating"  defaultValue={rating} placeholder="rating" className="input input-bordered" />
              
           </div>
           </div>
           </div>
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Photo Url</span>
               </label>
               <input type="text" required name="photo"  defaultValue={photo} placeholder="Photo Url" className="input input-bordered" />
           </div>
           <div className="form-control mt-6">
               <button className="btn text-white font-thin bg-[#3d657a] hover:bg-[#6096B4]">Update Product</button>
           </div>

           
       </form>
   </div>
    );
};

export default ProductUpdate;