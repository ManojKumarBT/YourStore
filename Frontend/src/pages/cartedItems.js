import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import { Link } from 'react-router-dom';

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CartDetails() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const extraCost = useSelector(state => state.cart.extraCost);
    const taxes = useSelector(state => state.cart.taxes);
    const grandTotal = useSelector(state => state.cart.grandTotal);
    console.log('Total Price:', totalPrice);
console.log('Delivery Charges:', extraCost);
console.log('Taxes:', taxes);
console.log('Grand Total:', grandTotal);

const navigate = useNavigate();
const location = useLocation();
console.log("In Cart Product:" + location.state);

const [newcartItems, setNewcartItems] = useState(JSON.parse(localStorage.getItem('test')));

  return (
    <>
    <Navbar1/>
    <Navbar2/>
   
    <div className='container bg-white mt-5'>
    {newcartItems.length? 
                    <div className='row mt-5'>
                                <h3 className='border-bottom py-2 mb-3 mt-5'>Shopping Cart</h3>
                                <div className="col-md-8 shadow">
                                    <div className="row border-bottom py-3">
                                        <div className='col-md-9'> Item
                                        </div>
                                        <div className='col-md-1'> Cost
                                        </div>
                                        <div className='col-md-1'> Qty
                                        </div>
                                        <div className='col-md-1'> Total
                                        </div>
                                    </div>
                                <div className="container border-right">
                                
                                    {newcartItems.map(item => (
                                        
                                        <div className="row borderp-2 py-4" key={item.id}>
                                                <div className='col-md-9 d-flex'>
                                                    <img src={item.image} alt={item.title} style={{width:"40px", height:"40px"}}/>
                                                    <h6 className='ps-3'>{item.title}</h6>
                                                </div>
                                                <div className='col-md-1'>
                                                    <p className='text-end'>{item.price}</p>
                                                </div>
                                                <div className='col-md-1'>
                                                    <p className='text-end'>{item.quantity}</p>
                                                </div>
                                                <div className='col-md-1'>
                                                    {/* <p className='text-end'>{item.total_item_price.toFixed(2)}</p> */}
                                                </div>
                                        </div>
                                    ))}
                                    <hr></hr>
                                    <div className="row mb-2 py-3 pe-3">
                                        <div className='offset-md-9 col-md-1'>
                                            <h5 className='text-end'>Total</h5>
                                        </div>
                                        <div className='col-md-1'>
                                            <h5 className='text-end'>{cartCounter}</h5>
                                        </div>
                                        <div className='col-md-1'>
                                            <h5 className='text-center'>{totalPrice.toFixed(2)}</h5>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='shadow p-2 mx-2 pb-5'>
                                <div className='d-flex justify-content-between px-2'>
                                    <p> Sub Total </p> <p>{totalPrice.toFixed(2)}</p>
                                </div>
                                <div className='d-flex justify-content-between px-2'>
                                <p> Delivery Charges </p> <p> {extraCost.toFixed(2)} </p>
                                </div>
                                <div className='d-flex justify-content-between px-2'>
                                <p> Tax </p> <p> {taxes.toFixed(2)} </p>
                                </div>
                                <div className='d-flex justify-content-between px-2'>
                                <p> Total </p> <p>  {grandTotal.toFixed(2)}</p>
                                </div>
                                <Link className='float-end btn btn-success' to='/payment'> Proceed to Payment</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <h1 className='text-center mt-5 pt-5'>No Items in your Cart</h1>}
            </div>
        </>
    );
}











        
        {/* {cartItems.length?
        <div className='row mt-5'>
            <h3 className='border-bottom py-2 mb-3 mt-5'>Shopping Cart</h3>
            <div className='col-md-8 shadow'>
                <div className='row border-bottom py-3'>
                    <div className='col-md-9'>Item</div>
                    <div className='col-md-1'>Cost</div>
                    <div className='col-md-1'>Quantity</div>
                    <div className='col-md-1'>Total</div>

                </div>
                <div className='container border-right'>
                    {cartItems.map(item=>(
                        <div className='row borderp-2 py-4' key={item.id}>
                            <div className='col-md-9 d-flex'>
                                <img src={item.image} alt={item.title} style={{width:"40px",height:"40px"}}/>
                                <h6 className='ps-3'>{item.title}</h6>
                            </div>
                            <div className='col-md-1'>
                                <p className='text-end'>{item.price}</p>
                            </div>
                            <div className='col-md-1'>
                                <p className='text-end'>{item.quantity}</p>
                            </div>
                            <div className='col-md-1'>
                                <p className='text-end'>{item.total_item_price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <hr></hr>
                    <div className='row mb-2 py-3 pe-3'>
                        <div className='offset-md-9 col-md-1'>
                            <h5 className='text-end'>Total</h5>
                      </div>
                      <div className='col-md-1'>
                        <h5 className='text-end'>{cartCounter}</h5>
                      </div>
                      <div className='col-md-1'>
                        <h5 className='text-center'>{totalPrice.toFixed(2)}</h5>
                      </div>
                    </div>
                </div>

            </div>
            <div className='col-md-4'>
                <div className='shadow p-2 mx-2 pb-5'>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Sub Total</p><p>{totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Extra Cost</p><p>{extraCost.toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Tax</p><p>{taxes.toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Total</p><p>{grandTotal.toFixed(2)}</p>
                    </div>
                    <Link className='float-end btn-btn-success' to='/payment'>Proceed To Payment</Link>

                </div>
            </div>
            </div>
            :
            <h1 className='text-center mt-5 pt-5'>No Items In Your Cart</h1>
           
                }
    </div>
    </>
  )
} */}

export default CartDetails