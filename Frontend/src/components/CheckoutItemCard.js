import react from 'react';

function CheckoutItemCard(){

    return(
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
                                
                                    {cartItems.map(item => (

                                        <div className="row borderp-2 py-4" key={product.id}>
                                            <div>{console.log("MANOJ")}</div>
                                            <div>{console.log(product)}</div>
                                            <div>{console.log(product.rating)}</div>
                                                <div className='col-md-9 d-flex'>
                                                    <img src={product.image} alt={product.title} style={{width:"40px", height:"40px"}}/>
                                                    <h6 className='ps-3'>{product.title}</h6>
                                                </div>
                                                <div className='col-md-1'>
                                                    <p className='text-end'>{product.price}</p>
                                                </div>
                                                <div className='col-md-1'>
                                                    <p className='text-end'>{cartCounter}</p>
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
                                            <h5 className='text-center'>{product.price.toFixed(2)}</h5>
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
    );
}

export default CheckoutItemCard;