import React from 'react'
import './TopSection.scss'
import {BsSearch} from 'react-icons/bs'
export default function TopSection() {
  return (
    <div className='topsection'>
        <h1>Hello Shahrukh🤚,</h1>
        <div className='search-box'>
        <BsSearch className='icon'/>
        <input type="text" className='input' placeholder='Search'/>
        </div>
    </div>
  )
}
