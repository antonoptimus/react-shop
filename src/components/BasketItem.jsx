import React, { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketItem({ id, name, price, quantity }) {
    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);
        
    return (
        <li className='collection-item'>
            {name}
            <i
                className='material-icons basket-quantity'
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            x {quantity}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(id)}
            >
                add
            </i>
            = {price * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}
