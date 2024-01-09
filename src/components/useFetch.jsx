import React,{useEffect, useState} from 'react'

import axios from 'axios';

const UseFetch = (url) => {

    const [dataItem, setDataItem] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const FetchData = async () => {
            setLoading(true);

            try {
                const response = await axios.get(url);
                setDataItem(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
                console.log('error occurred: ', error);
            } finally {
                setLoading(false);
            }
        }

        FetchData();

    }, [url]);

    return { dataItem, error, loading}
}

export default UseFetch
