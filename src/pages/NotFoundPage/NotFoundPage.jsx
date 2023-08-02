import React from 'react'
import FatalError from "../../assets/FatalError.png"
import "./NotFoundPage.css"

export const NotFoundPage = ({errorMessage}) => {
  return (
    <div className='not-found-container'>
        <img src={FatalError} alt="eRROR!" />
        <h2 className='text-error'>OOPS!</h2>
        <p className="error-descript">{errorMessage}</p>


    </div>
  )
}
