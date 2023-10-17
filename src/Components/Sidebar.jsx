import React from 'react'
import './Sidebar.scss';
import  {FaHome,FaProductHunt,FaUserCircle,FaRupeeSign,FaHireAHelper} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h2 className='heading'><FaHome className='icon'/><span>Dashboard</span></h2>
        <ul>
        <li className='list active'><a href="#"><FaHome className='icon'/><span>Dashboard</span></a></li>
            <li className='list'><a href="#"><FaProductHunt className='icon'/><span>Product</span></a></li>
            <li className='list'><a href="#"><FaUserCircle className='icon'/><span>Customer</span></a></li>
            <li className='list'><a href="#"><FaRupeeSign className='icon'/><span>Income</span></a></li>
            <li className='list'><a href="#"><FaUserCircle className='icon'/><span>Promote</span></a></li>
            <li className='list'><a href="#"><FaHireAHelper className='icon'/><span>Help</span></a></li>
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