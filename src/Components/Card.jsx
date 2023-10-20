import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({eachData}) => {

    const {id, name, image} = eachData
    return (
        <div >
        
        <div className=" shadow-xl bg-[#596366] " data-aos="flip-right">
        <Link to={`/products/${name}`}>
<figure><img className="h-[220px] w-full" src={image} alt="Shoes" /></figure>

<h2 className="mx-4 my-4 text-center">{name}</h2>

</Link>

</div>
    
        
    </div>
    );
};

export default Card;