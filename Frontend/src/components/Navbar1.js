import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useSelector } from 'react-redux';

function Navbar1() {
  const cartCounter = useSelector((state) => state.cart.cartCounter);

  return (
    <>
      <nav className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/">
            <img
              src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
              alt="Display"
              className="w-24 h-auto"
            />
          </Link>

          {/* Toggler Button for small screens */}
          <button
            className="block lg:hidden text-gray-700 focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="material-icons">menu</span>
          </button>

          {/* Collapsible Navbar Content */}
          <div className="hidden lg:flex justify-between w-full" id="navbarNav">
            {/* Search Bar */}
            <form className="flex-grow mx-4">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                type="search"
                placeholder="Try Saree, Kurti or Search by Product Code"
                aria-label="Search"
              />
            </form>

            {/* Navigation Links */}
            <ul className="flex items-center space-x-6">
              {/* Download App Dropdown */}
              <li className="relative group">
                <button className="text-black">Download App</button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                      to="https://play.google.com/store/apps/details?id=com.meesho.supply"
                    >
                      For Android
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                      to="https://apps.apple.com/in/app/meesho/id1457958492"
                    >
                      For IOS
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Become a Supplier */}
              <li>
                <Link className="text-black hover:text-gray-600" to="#">
                  Become a Supplier
                </Link>
              </li>

              {/* News Room */}
              <li>
                <Link
                  className="text-black hover:text-gray-600"
                  to="https://www.meesho.io/news"
                >
                  News Room
                </Link>
              </li>

              {/* Profile */}
              <li className="flex items-center">
                <IconButton color="primary">
                  <Person2OutlinedIcon />
                </IconButton>
                <Link className="ml-1 text-black hover:text-gray-600" to="/Login">
                  Profile
                </Link>
              </li>

              {/* Cart */}
              <li className="flex items-center">
                <IconButton color="primary">
                  <AddShoppingCartIcon />
                </IconButton>
                <Link className="ml-1 text-black hover:text-gray-600" to="/cart">
                  Cart ({cartCounter})
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
}

export default Navbar1;





