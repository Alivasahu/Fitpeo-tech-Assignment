import React from 'react'
import './Dashboard.scss'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import TopSection from './TopSection'
import SmallCard from './SmallCard'
import OverviewSection from './OverviewSection'
import Customer from './Customer'
import ProductSell from './ProductSell'
import {FaCommentDollar} from 'react-icons/fa'
export default function Dashboard() {
  const Data=[
    {
      icon:<FaCommentDollar className='icon'/>,
     title:"Earning",
     num:"17.8",
     rating:"⬇️36.7"
    },
    {
      icon:<FaCommentDollar className='icon'/>,
     title:"Order",
     num:"97.8",
     rating:"⬇️36.7"
    },
    {
      icon:<FaCommentDollar className='icon'/>,
     title:"Balance",
     num:"17.8",
     rating:"⬇️36.7"
    },
    {
      icon:<FaCommentDollar className='icon'/>,
     title:"Total Score",
     num:"18.8",
     rating:"⬇️11.7%"
    },
  ]
  return (
    <div className='dashboard'>
      <TopSection /> 
       <div className="section2">
       {
        Data.map((data,index)=>{
         return(
          <SmallCard data={data}/>
         )
        
        })
       }
      </div> 
      <div className="section3">
         <OverviewSection /> 
         <Customer />  
      </div> 
    <ProductSell/>
    </div>
  )
}
