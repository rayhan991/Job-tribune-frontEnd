import React from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";
import Rating from 'react-rating';

const SpotItem = ({ image, tagline, name, type, location, rating }) => {
    const history = useHistory()

    const handleRoute = () => {
        history.push(`/products/${name}`);
    }
    return (
        <div className="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="text-primary text-2xl poppins py-1 inline-block ">{name}</span>
            <div className='flex flex-row justify-between'>
                <div>
                    <img className="w-50 h-50" src={image} alt="" />
                    < ProgressBar completed={60} className='my-3' />
                </div>
                <div className="space-y-2 px-3">
                    <div className='flex flex-row justify-between'>
                        <h2 className="text-gray-900 poppins text-1xl font-bold">{location}</h2>
                        {
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star text-yellow-500"
                                fullSymbol="fa fa-star text-yellow-500"
                            />
                        }
                    </div>
                    <p className="text-gray-900 poppins text-1xl ">{type}</p>
                    <p className="text-gray-900 poppins text-1xl ">{tagline.slice(0, 110)}</p>
                    <button className="bg-primary px-10 py-1 text-white poppins  ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={handleRoute}>Explore</button>

                </div>
            </div>


        </div>
    )
}

export default SpotItem
