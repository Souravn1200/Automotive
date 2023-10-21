import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const data = useLoaderData()
    return (
        
        <div className='grid lg:grid-cols-3 gap-6 mt-6'>
            {data?.length && data?.map(eachData => <Card key={eachData.id} eachData={eachData}></Card>)}
        </div>
    );
};

export default Home;