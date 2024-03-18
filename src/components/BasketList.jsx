import React, { useContext } from 'react';
import BasketItem from './BasketItem';
import { ShopContext } from '../context';

export default function BasketList() {
    const { handleBasketShow, order = [] } = useContext(ShopContext);

    const totalPrice = order.reduce(
        (summ, curr) => summ + curr.price * curr.quantity,
        0
    );

    return (
        <ul class='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item active total'>
                Общая стоимость: {totalPrice} руб.
                <button className='btn-small grey darken-1'>
                    Оформить заказ
                </button>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}
