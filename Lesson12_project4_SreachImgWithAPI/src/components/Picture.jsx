import React from 'react'

function Picture(props) {
    //import props 
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={props.urls.small} alt={props.description} className='w-full h-60'/></figure>
            <div className="card-body">
                <p>{props.user.bio}</p>
            </div>
        </div>
    )
}

export default Picture
