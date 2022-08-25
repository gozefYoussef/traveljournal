import React from 'react'

const Card = (props) => {  
    return (
    <div>
    <div className='card'>
        <img className='image' src={props.imageUrl} />
        <div className='col2'>
            <div className='row'>
                <img src="/Fill 219.png" />
                <span>{props.location}</span>
                <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>
            </div>
            <h1>{props.title}</h1>
            <strong>{props.startDate} to {props.endDate}</strong>            
            <p>{props.description}</p>
        </div>
    </div>
    </div>
  )

}

export default Card