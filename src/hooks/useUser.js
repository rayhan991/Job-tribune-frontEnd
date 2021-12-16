import { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://whispering-retreat-71950.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))

    }, [users])
    return [users, setUsers]
}

export default useUser;
