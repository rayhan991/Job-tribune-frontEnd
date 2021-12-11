import React from 'react';
import { useHistory } from 'react-router-dom';

const ExploreAllProduct = ({ image, tagline, name, type, location }) => {
    const history = useHistory()

    const handleRoute = () => {
        history.push(`/products/${name}`);
    }
    return (
        <div className="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="text-primary text-xl poppins py-1 inline-block ">{name}</span>
            <div className='flex flex-row'>

                <div>

                    <img className="w-120 h-50 transform transition duration-300 hover:scale-105 " src={image} alt="" />
                </div>
                <div className="my-3 space-y-2 px-3">
                    <h2 className="text-gray-900 poppins text-1xl font-bold">{location}</h2>
                    <p className="text-gray-900 poppins text-1xl ">{type}</p>
                    <hp className="text-gray-900 poppins text-1xl ">{tagline}</hp>
                </div>
            </div>

            <button className="bg-primary text-white px-20 py-2 focus:outline-none poppins  mt-5 transformc transition duration-300 hover:scale-105" onClick={handleRoute}>Explore</button>
            <button className="bg-primary text-white px-20 mx-10 py-2 focus:outline-none poppins  mt-5 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Apply</button>
        </div>
    )
}

export default ExploreAllProduct
