import React from 'react';
import BasketItem from './BasketItem';

export default function BasketList({
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
}) {
    const totalPrice = order.reduce(
        (summ, curr) => summ + curr.price * curr.quantity,
        0
    );

    return (
        <ul class='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        removeFromBasket={removeFromBasket}
                    />
                ))
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
