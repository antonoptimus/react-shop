import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </main>
    );
}
