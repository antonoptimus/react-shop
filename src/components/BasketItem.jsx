import React from 'react';

export default function BasketItem({
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
}) {
    return (
        <li className='collection-item'>
            {name} x {quantity} = {price * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}
