import React from 'react'
import './Sidebar.scss';
import  {FaHome,FaProductHunt,FaUserCircle,FaRupeeSign,FaHireAHelper} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h2 className='heading'><FaHome className='icon'/><span>Dashboard</span></h2>
        <ul>
        <li className='list active'><FaHome className='icon'/><span>Dashboard</span></li>
            <li className='list'><FaProductHunt className='icon'/><span>Product</span></li>
            <li className='list'><FaUserCircle className='icon'/><span>Customer</span></li>
            <li className='list'><FaRupeeSign className='icon'/><span>Income</span></li>
            <li className='list'><FaUserCircle className='icon'/><span>Promote</span></li>
            <li className='list'><FaHireAHelper className='icon'/><span>Help</span></li>
        </ul>
        <div className="last-section list">
            <img src="./client1.png" alt="" />
            <div className="content">
              <h6>Enovo</h6>
              <p>Profile Manager</p>
            </div>
        </div>
    </div>
  )
}

// @include flex(flex-start,initial,row);
// @include flex(center,initial,row);
// @include flex(center,center,row);
// @include flex(center,flex-start,column);
// @include flex(flex-start,initial,row);
// @include flex(center,initial,row);