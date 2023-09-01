import { useState, useEffect } from 'react';
import axios from 'axios';

const useUpdate = (url,body) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateData = async () => {
        try {
            const { data: response } = await axios.put(url,body);
            setData(response);

        } catch (error) {
            setError(error.message);

        } finally {
            setLoading(false);
        }

    }

    return ({ data, loading, error })
}

export default useUpdate;