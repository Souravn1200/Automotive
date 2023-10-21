
import { Link } from 'react-router-dom';

const Card = ({eachData}) => {

  

    const {id, name, image} = eachData
    return (
        <div >
        
        <div className=" " data-aos="flip-right">
        <Link to={`/products/${name}`}>
<figure><img className="h-[110px] w-full" src={image} alt="Shoes" /></figure>

<h2 className="mx-4 my-4 text-center text-2xl">{name}</h2>

</Link>

</div>
    
        
    </div>
    );
};

export default Card;