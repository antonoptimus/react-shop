import React from 'react';
import BasketItem from './BasketItem';

export default function BasketList({
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
}) {
    const totalPrice = order.reduce(
        (summ, curr) => summ + curr.price * curr.quantity,
        0
    );

    return (
        <ul class='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket}/>)
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} руб.
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
