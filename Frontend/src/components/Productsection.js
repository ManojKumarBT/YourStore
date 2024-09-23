import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Ads from './Ads';
import Productdisplay from './Productdisplay';
import { useNavigate } from "react-router-dom";

function Productsection(product) {

  const navigate = useNavigate();

  const dispatch=useDispatch()
const handleCart=()=>{
    dispatch(addtoCart(product))
    Swal.fire({
      title: "Congratulation!",
      text: "One Item Added To Cart!",
      icon: "success"
    });
    
}

const goToBuyCart = (e) => {
  e.preventDefault();
  navigate("/cart", { state: product});
};


  return (
   <>
      {/* <Link component="button" variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={handleCart} className='btn-btn-secondary' >
        Add to Cart
      </Link>
      <Link variant="contained" endIcon={<ArrowForwardIosIcon />} to='/cart' className='btn-btn-primary'>
        Buy Now
      </Link> */}
      <div className="flex space-x-4">
      {/* Add to Cart Button */}
      <Link
        component="button"
        onClick={handleCart}
        className="bg-pink-200 text-black font-semibold py-2 px-4 border border-pink-400 rounded hover:bg-pink-300 transition duration-200 ease-in-out flex items-center space-x-2"
      >
        <AddShoppingCartIcon />
        <span>Add to Cart</span>
      </Link>

      {/* Buy Now Button */}
      <Link
        onClick={goToBuyCart}
        className="bg-pink-400 text-white font-semibold py-2 px-4 border border-pink-600 rounded hover:bg-pink-500 transition duration-200 ease-in-out flex items-center space-x-2"
      >
        <span>Buy Now</span>
        <ArrowForwardIosIcon />
      </Link>
    </div>

 <div className="mt-4 mb-4">
  <h1 className="text-3xl font-bold text-left ml-4">People also viewed</h1>
</div>


<div>
  <Productdisplay product={product}/>
</div>


      </>
  )
}

export default Productsection
