import React from 'react';
import swal from 'sweetalert';

const Addproduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name') 
        const brand = form.get('brand')
        const type =  form.get('type');
        const photo = form.get('photo');
        const price = form.get('price');
        const description = form.get('description');
        const rating = form.get('rating');

        const newProduct =  {name, brand, type, photo, price, description, rating}
        console.log(newProduct);

        fetch('https://automotive-server-theta.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            swal("Congratulations!", "Your Product was added", "success")
            console.log(data);
        })

    }
    return (
        <div>
             <form onSubmit={handleAddProduct} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className='flex gap-60'> 
                <div> 
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" required name="brand" placeholder="brand" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <input type="text" required name="type" placeholder="type" className="input input-bordered" />
                </div>

               
                </div>
                <div> 
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" required name="price" placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" required name="description" placeholder="description" className="input input-bordered" />
                   
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" required name="rating" placeholder="rating" className="input input-bordered" />
                   
                </div>
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" required name="photo" placeholder="Photo Url" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white font-thin bg-[#3d657a] hover:bg-[#6096B4]">Add Product</button>
                </div>

                
            </form>
        </div>
    );
};

export default Addproduct