import React, { useState } from 'react'

function Item(props) {
    //props data from app component
    const {id, title , description} = props

    //show state 
    const [ show , setShow ] = useState(false)

    return (
        <section className='text-center border m-4 shadow-md p-4 hover:bg-slate-100'>
            <article className='flex justify-between py-2'>
                <h3 className='font-bold'>{title}</h3>
                <button className='border border-blue-500 rounded-md text-blue-500 px-2 hover:text-white hover:bg-blue-500' onClick={()=>setShow(!show)}>{show ? "HIDDEN" : "SHOW"}</button>
            </article>
            {show && <p className='bg-white'>{description}</p>}
            
        </section>
    )
}

export default Item