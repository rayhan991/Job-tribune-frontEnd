import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useFetch from '../hooks/useFetch';
import Back from '../routes/Back';
import Spinner from '../Spinner/Spinner';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import TextField from '../components/Form/TextField';
import Label from '../components/Form/Label';
import Button from '../components/Form/Button';



const ProductsDetails = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [area, setArea] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [resume, setResume] = useState('')

    const [loading, setLoading] = useState(false)
    const { name } = useParams();
    const [products] = useFetch();
    const { user, token } = useAuth();
    const history = useHistory();

    // const [order, setOrder] = useOrder()
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if (!resume) {
            return;
        }
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('area', area);
        formData.append('phone', phone);
        formData.append('resume', resume);

        // const newProduct = { name, description, price, image, rating }
        //POST 
        fetch("http://localhost:5000/orders", {
            method: 'POST',
            body: formData
        }).then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    swal("Product Added!", "Product is added to the database!", "success");
                    history.push('/');
                } else {
                    swal("Unsuccessful !", "Product is not added to the database!", "error");
                }
            })
    }



    return (
        <div className="bg-white border border-gray-200 transition transform  hover:shadow-xl  p-4 my-5 rounded-lg relative">
            {/* <Back /> */}
            {
                loading ? <Spinner /> :
                    products?.filter(item => item.name === name)?.map((product) =>
                    (
                        <div className="flex flex-col justify-evenly py-5">
                            <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  " key={product.id}>
                                {/* left side  */}
                                <div className="order-2 md:order-1 lg:order-1 content justify-center">
                                    <h1 className="text-center md:text-left lg:text-left text-2xl lg:text-2xl font-semibold poppins pb-4 text-gray-700 select-none">{product.name}</h1>
                                    <p className="text-center md:text-left lg:text-left text-1xl poppins text-gray-500 leading-relaxed select-none">{product.type}</p>
                                    <p className="text-center md:text-left lg:text-left text-1xl poppins text-gray-500 leading-relaxed select-none">{product.tagline}</p>
                                    {/* <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">{product.description}</p> */}
                                </div>

                                <div className="order-1 md:order-2 lg:order-2">
                                    <div className="flex flex-col p-5" >
                                        <div className="mt-8">
                                            <Button className="hover:scale-105" text="Apply" onClick={product.applyLink} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className=" md:text-left lg:text-left text-1xl  py-2 text-gray-500">{product.description}</p>
                        </div>

                    )
                    )
            }



        </div >
    )
}

export default ProductsDetails;
