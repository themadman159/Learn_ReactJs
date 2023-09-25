import React from 'react'
import Item from './Item'
import { useCart } from '../context/CartContext'

function Cart() {
  //import store context
  const { products, total } = useCart()



  return (
    <div>
      <p className='text-center font-bold p-5'>
        {products.length > 0 ? `ยอดรวมราคาสินค้าทั้งหมด : ${total} บาท` : `ไม่มีสินค้าอยูในตระกร้า` }
      </p>
      {products.map((item) => {
        return <Item key={item.id} {...item} />
      })}
    </div>
  )
}

export default Cart