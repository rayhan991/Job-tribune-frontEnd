import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';
import Button from '../../components/Form/Button';
import Label from '../../components/Form/Label';
import TextField from '../../components/Form/TextField';


const AddProductForm = () => {
    const [name, setTitle] = useState('')
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [tagline, setTagline] = useState('')
    const [image, setImage] = useState('')
    const [applyLink, setApplyLink] = useState('')
    const [rating, setStar] = useState('')
    const history = useHistory()



    //post to database 
    const handleSubmit = e => {
        e.preventDefault()
        const newSpot = { name, description, tagline, image, rating, location, type, applyLink }

        //POST 
        fetch("https://whispering-retreat-71950.herokuapp.com/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        }).then((res) => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Job Added!", "Job Vacance  added to the database!", "success");
                    history.push('/');
                } else {
                    swal("Unsuccessful !", "Job Vacance  not added to the database!", "error");
                }
            })
    }


    return (
        <>

            <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6" onSubmit={handleSubmit}>
                {/* title and description  */}
                <div className="flex flex-col space-y-4">
                    <Label htmlFor="name" text="Job Name" />
                    <TextField
                        id="title"
                        type="text"
                        value={name}
                        onChange={e => setTitle(e.target.value)}
                        required />
                    <Label htmlFor="name" text="Type" />
                    <TextField
                        id="type"
                        type="text"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        required />

                    {/* description  */}
                    <Label htmlFor="description" text="Description" />
                    <textarea
                        id="description"
                        cols="15" rows="5"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>
                    <Label htmlFor="apply" text="Apply Link" />
                    <TextField
                        id="type"
                        type="text"
                        value={applyLink}
                        onChange={e => setApplyLink(e.target.value)}
                        required />

                    {/* description  */}

                </div>

                {/* tagline , image , duration, spotname*/}
                <div className="flex flex-col space-y-4">
                    {/* Location */}
                    <Label htmlFor="location" text="Job Location" />
                    <TextField
                        id="location"
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        required />
                    {/* tagline  */}
                    <Label htmlFor="cost" text="tagline" />
                    <TextField
                        id="tagline"
                        type="text"
                        value={tagline}
                        onChange={e => setTagline(e.target.value)}
                        required />
                    {/* image url  */}
                    <Label htmlFor="image" text="Image URL" />
                    <TextField
                        id="image"
                        type="text"
                        value={image}
                        onChange={e => setImage(e.target.value)} required />

                    {/* rating */}
                    <Label htmlFor="star" text="Rating" />
                    <TextField
                        id="star"
                        type="text"
                        value={rating}
                        onChange={e => setStar(e.target.value)} required />

                    {/* button  */}
                    <div className="mt-8">
                        <Button text="Add" type="submit" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddProductForm
