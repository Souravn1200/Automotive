import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProdcutDetails from './ProdcutDetails';

const ProductCollection = () => {

    const {brand} = useParams()
    const products = useLoaderData()

    return (
        <div className='grid lg:grid-cols-3 gap-2 mt-6'>
            
            {
             products.map(product => <ProdcutDetails key={product._id} product={product}></ProdcutDetails>)
            
            }
        </div>
    );
};

export default ProductCollection;