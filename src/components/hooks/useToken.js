import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(async () => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            const result = await axios.put(`http://localhost:5000/user/${email}`, currentUser)
            console.log(result.data);
            const accessToken = result.data.token;
            localStorage.setItem('accessToken', accessToken);
            setToken(accessToken);
            console.log(accessToken);
        }
        console.log('User Inside useToken', currentUser);
    }, [user])
    return [token];
}
export default useToken;