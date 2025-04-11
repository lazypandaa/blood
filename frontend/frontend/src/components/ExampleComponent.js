import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const ExampleComponent = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    return <div>{data}</div>;
};

export default ExampleComponent;