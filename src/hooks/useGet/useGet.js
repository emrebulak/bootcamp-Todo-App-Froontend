import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fethData = async () => {
        try {
            const { data: response } = await axios.get(url);
            setData(response);

        } catch (error) {
            setError(error.message);

        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fethData();
    }, []);

    return ({ data, loading, error })
}

export default useFetch;