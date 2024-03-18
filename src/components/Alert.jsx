import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

export default function Alert() {
    const { alertName: name = '', closeAlert = Function.prototype } =
        useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearInterval(timerId);
        };
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
}
