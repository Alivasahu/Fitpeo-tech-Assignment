import React from 'react'
import './SmallCard.scss'
import {FaCommentDollar} from 'react-icons/fa'
export default function SmallCard({data}) {
    const {icon,title,num,rating}=data
    console.log(icon)
  return (
    <div className='smallCard'>
        <div className="card-icon">
       {icon}
        </div>
        <div className="card-content">
            <p className="title"> {title} </p>
            <h5>${num}</h5>
            <p><span>{rating}</span> This Month</p>
        </div>
    </div>
  )
}
