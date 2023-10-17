import React from 'react'
import './ProductSell.scss';
import { BsSearch } from 'react-icons/bs'
export default function ProductSell() {
    return (
        <div className='productsell'>
           <div className="products-table">
           <div className="top-section">
                <h3>Product Sell</h3>
                <div className='corner'>
                    <div className='search-box'>
                        <BsSearch className='icon' />
                        <input type="text" className='input' placeholder='Search' />
                    </div>
                    <div>
                        <select name="cars" id="cars">
                            <option value="volvo">Last 30 Day</option>
                            <option value="saab">Last 20day</option>
                            <option value="opel">Last 10 days</option>
                            <option value="audi">Last 1 year</option>
                        </select>
                    </div>
                </div>
            </div>
          
            <table style={{ width: "100%",textAlign:"left" }}>
                <tr>
                    <th>Product Name</th>
                    <th>Stoke</th>
                    <th>Price</th>
                    <th>Total Sales</th>
                </tr>
             
                <tr>
                    <td>
                       <div className='product-detail'>
                       <img src="./img1.jpg" alt="" />
                        <div className="content">
                            <h3>Abstract 3D</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolorum!</p>
                        </div>
                       </div>

                    </td>
                    <td>32 in stock</td>
                    <td>$ 45 99</td>
                    <td>22</td>
                </tr>
              
            </table>
           </div>
        </div>
    )
}
