
import logo from '../../assets/logo.jpg';
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cartSummary');
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white border-b">
            {/* Logo Section */}
            <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
                <img src={logo} className="w-[256px] h-[165px]" alt="Logo" />
            </div>

            {/* Search Section */}
            <div className="flex items-center w-full sm:w-1/3 mt-4 sm:mt-0">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-700"
                />
                <button className="p-[11px] bg-gray-800 text-white rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Cart Section */}
            <div className="flex items-center bg-secondary  p-2 cursor-pointer relative mt-4 sm:mt-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button className="flex items-center text-gray-700">
                    <FaShoppingCart className='text-white w-6 h-6' />
                    <span className="text-lg font-semibold text-white ml-2">Cart</span>
                    <span className="ml-1 text-sm text-gray-500 mr-16">(empty)</span>
                    {isHovered ? (
                        <IoCaretUpOutline onClick={handleCartClick} className="cursor-pointer text-gray-600" title="View my shopping cart" />
                    ) : (
                        <IoCaretDownOutline className='text-gray-600' />
                    )}
                </button>
            </div>
        </div>
    );
};

export default TopNav;

