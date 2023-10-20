import { data } from 'autoprefixer';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductEachDeatils = () => {
    const _id = useParams;

    // fetch(`http://localhost:5000/products/${_id}`)
    // .then(res => res.json())
    // .then( data => console.log(data))

    return (
        <div>
            <h2>Product</h2>
        </div>
    );
};

export default ProductEachDeatils;