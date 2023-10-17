import React from 'react'
import './Customer.scss'
import {BsCircle} from 'react-icons/bs'
export default function Customer() {
  return (
    <div className='customer'>
        <h2>Customers</h2>
        <p>Customer that buy products</p>
        <div className='circle'>
            <BsCircle className='icon'/>
            <h3>65%</h3>
        </div>
    </div>
  )
}
