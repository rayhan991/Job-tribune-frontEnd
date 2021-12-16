import { useEffect, useState } from 'react';

const useFetch = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://whispering-retreat-71950.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, [products])
    return [products, setProducts]
}

export default useFetch
