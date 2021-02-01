import React from 'react'
import './Card.css'

function Card({date, temperature, imageUrl, weather}){
    return (
        <div className="card-container">
           
            <div className="card-content">
                <div className="card-date">
                    <h3>{date}</h3>                
                </div>
                <div className="card-weather">
                    {weather}
                </div>
                <div className="image-container">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="card-temperature">
                    {temperature}
                </div>
              
            </div>
            

        </div>
    )
}

export default Card