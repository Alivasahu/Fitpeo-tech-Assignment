import React from 'react'
import './OverviewSection.scss';
import Candle from './Candle';
export default function OverviewSection() {
    const Data = [
        {
            month: "Jan",
            height: "90"
        },
        {
            month: "Feb",
            height: "10"
        },
        {
            month: "Mar",
            height: "50"
        },
        {
            month: "Apr",
            height: "40"
        },
        {
            month: "May",
            height: "100",
            active:'high'
        },
        {
            month: "Jun",
            height: "40"
        },
        {
            month: "Jul",
            height: "40"
        },
        {
            month: "Aug",
            height: "40"
        },
        {
            month: "Sep",
            height: "40"
        },
        {
            month: "Oct",
            height: "40"
        },
        {
            month: "Nov",
            height: "40"
        },
        {
            month: "Dec",
            height: "40"
        },

    ]
    return (
        <div className='overview'>
            <div className="top-section">
                <div>
                    <h3>Overview</h3>
                    <p>Monthly Earning</p>
                </div>
                <p>Quarterly</p>
            </div>
            <div className="graph-section">
             {
                Data.map((data,index)=>{
                    return(
                        <Candle key={index} data={data}/>
                    )
                })
             }


            </div>
        </div>
    )
}
