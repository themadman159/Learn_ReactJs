import React from 'react'
import { useCart } from '../context/CartContext'

function Item(props) {
    //props data from Cart context
    const { id, name, price, image, quantity } = props
    const {formatMoney, removeItem, increItem, decreItem} = useCart()

    return (
        <div className='card'>
            <img src={image} className='imagetumbnaill'/>
            <div>
                <p>ชื่อสินค้า : {name}</p>
                <p>ราคาสินค้า : {formatMoney(price)} บาท</p>
            </div>
            <div>
                <button className='btn-incre' onClick={()=>increItem(id)}>+</button>
                <input type="text" value={quantity} disabled className='amount-input'/>
                <button className='btn-decre' onClick={()=>decreItem(id)}>-</button>
            </div>
            <div>
                <p className=''>{formatMoney(quantity * price)}</p>
            </div>
            <button className='btn-delete' onClick={()=>removeItem(id)}>ลบสินค้า</button>
        </div>
    )
}

export default Item