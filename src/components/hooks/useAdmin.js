import { useState, useEffect } from 'react';
import Loading from './../Shared/Loading';
const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);


    useEffect(async () => {
        const email = user?.email;
        if (email) {
            const result = await fetch(`http://localhost:5000/admin/${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(`accessToken`)}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                })
            setAdminLoading(false);
        }

    }, [user])
    return [admin, adminLoading];

}

export default useAdmin;