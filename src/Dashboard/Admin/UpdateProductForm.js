import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert'
import useAuth from '../../hooks/useAuth';


const UpdateProductForm = () => {
    const [users, setUser] = useState({});
    const { id } = useParams();
    const history = useHistory();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://whispering-retreat-71950.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id])

    //track the update 
    const handleUpdate = (e) => {
        const { value, name } = e.target

        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    //handleUpdate 
    const handleSubmit = e => {
        e.preventDefault();
        const bikeName = users.bikeName;
        const name = user.displayName;
        const email = users.email;
        const phone = users.phone;

        const updateSpot = { bikeName, name, email, phone }

        //update 
        fetch(`https://whispering-retreat-71950.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateSpot)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Updated", "Update Successfully!", "success");
                }
                history.push('/dashboard/myOrder');
            })
    }



    return (
        <>
            <form onSubmit={handleSubmit} class="w-full max-w-lg">

                <div class="flex flex-wrap -mx-3 mb-6">

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Bike Name
                        </label>
                        <input

                            name="name"
                            value={users.bikeName || " "}
                            onChange={handleUpdate}
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            (Write your currennt user name)
                        </label>
                        <input
                            defaultValue={user.displayName}
                            name="name"
                            value={users.name}
                            onChange={handleUpdate}
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
                    </div>



                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Email
                        </label>
                        <input
                            required
                            name="email"
                            value={users.email || " "}
                            onChange={handleUpdate}

                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Phone
                        </label>
                        <input
                            name="phone"
                            value={users.phone || " "}
                            onChange={handleUpdate}
                            required

                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Phone Number" />
                    </div>
                </div>


                <button
                    type="submit" className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500">
                    Update Info</button>
            </form>
        </>
    )
}

export default UpdateProductForm
