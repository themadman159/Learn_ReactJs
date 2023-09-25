import React from 'react'
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";  
import { useCart } from '../context/CartContext';

function Navbar() {

    const {amount} = useCart()
    return (
        <div className='flex justify-between p-5'>
                <h1 className='uppercase font-bold'>Shopping App</h1>
                <p className='flex items-center'><BsCart4 />สินค้าในตะกร้า : {amount}</p>
        </div>
    )
}

export default Navbar