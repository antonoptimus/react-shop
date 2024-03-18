import React, { useContext, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

export default function Shop() {
    const { loading, order, setGoods, isBasketShow, alertName } =
        useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}
