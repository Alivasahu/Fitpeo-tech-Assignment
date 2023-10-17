import React from 'react'
import './OverviewSection.scss'
export default function Candle({data}) {
    const {month,height,active}=data
   
    const setStyleHeight = (height) => {
        return {
          height: `${height}%`,
        };
      };
    return (
        <div className="graph">
            <div className={active?"candle active":"candle"} style={setStyleHeight(height)} >
            </div>
            <p>{month}</p>
        </div>
    )
}
