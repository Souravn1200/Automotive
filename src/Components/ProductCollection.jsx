import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProdcutDetails from './ProdcutDetails';

const ProductCollection = () => {

    const {brand} = useParams()
    const lodedProducts = useLoaderData();
    const [renderingProduct, setrenderingProduct] = useState(lodedProducts)

    console.log(renderingProduct);

    return (
        <div className='grid lg:grid-cols-3 gap-2 mt-6'>
            
            {
             renderingProduct?.length && renderingProduct?.map(product => <ProdcutDetails key={product._id} product={product} renderingProduct={renderingProduct} setrenderingProduct={setrenderingProduct}></ProdcutDetails>)
            
            }
        </div>
    );
};

export default ProductCollection;