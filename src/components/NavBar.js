import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from "./pngtree-vector-location-icon-png-image_855078-removebg-preview.png";
import image2 from "./images-removebg-preview (2).png";
import bars from "./hamburger-button-drop-down-list-computer-icons-navigation-bars-and-page-menu-templates-thumbnail-removebg-preview.png";
import { ProductContext } from '../context/ProductContext';

export default function () {
    const product = useContext(ProductContext)
    const [focus, setFocus] = useState(false)
    const [current, setCurrent] = useState(false);
    const handleClick = () => {
        setCurrent(!current); // Corrected line
    }
    const handleFocus = () => {
        setFocus(!focus);
    }

    const [searchCategory, setSearchCategory] = useState("");

    const filteredProducts = product.filter(item =>
        item.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    console.log("filter:", filteredProducts)

    return (
        <div className='text-white font-sans '>
            <section className=' fixed w-screen bg-gray-950 md:pt-2.5 md:px-3 z-10  md:h-16 flex md:just'>
                <div className='hover:border border-white p-2 md:h-12 md:w-38 md:ml-2'>
                    <Link to="/">
                        <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="" className='h-8' />
                    </Link>
                </div>
                <div className='flex md:w-52 md:pb-3 md:px-2 md:ml-5 md:h-12 hover:border   border-white '>
                    <img src={image1} alt="" className='h-8  mt-3' />
                    <div>
                        <p className=''>Location</p>
                        <p className='  font-bold'>Update Location</p>
                    </div>
                </div>
                <div className={`flex md:mx-14 ${focus ? 'focus:outline-orange-600' : ''}`} >
                    <div className='text-black md:h-12 md:w-16 '>
                        <select name="all" id="" className='w-16 p-2 md:h-10 border border-black   bg-gray-300 rounded-l-md'>
                            <option value="all" >All</option>
                            <option value="all">All categories</option>
                            <option value="all">Alexa Skills</option>
                            <option value="all">Amazon Devices</option>
                            <option value="all">Amazon Fashion</option>
                            <option value="all">Amazon Fresh meat</option>
                            <option value="all">Amazon Fresh</option>
                            <option value="all">Amazon Pharmacy</option>
                            <option value="all">Appliances</option>
                            <option value="all">App & Games</option>
                            <option value="all">Books</option>
                            <option value="all">Beauty</option>
                            <option value="all">Clothing</option>
                            <option value="all">Accessories</option>
                            <option value="all">Electronics</option>
                        </select>
                    </div>
                    <form className='flex'>
                        <div className='md:h-20  text-black '>
                            <input type="text" placeholder='Search Amazon.in' onClick={handleFocus} className='md:h-10 md:w-96 md:px-5 focus:outline-orange-600'
                                value={searchCategory}
                                onChange={(e) => setSearchCategory(e.target.value)}
                            />
                        </div>
                        <div className='bg-orange-400 rounded-r-md md:h-10  md:pt-2 md:pb-3 md:px-4 md:w-14 hover:cursor-pointer hover:bg-orange-500'>
                            <Link to="/product"><button type='submit'><img src={image2} alt="" className='h-7' /></button></Link>
                        </div>
                    </form>
                </div>
                <div className='hover:border border-white md:h-12  md:pb-2 md:px-2 md:pt-1 md:w-16 md:ml-10'>
                    <select name="language" id="" className='h-10 rounded bg-gray-950 font-bold '>
                        <option value="Eng"> EN </option>
                    </select>
                </div>
                <div className=' md:ml-10 md:h-12 md:pb-2 md:px-2 m hover:border border-white hover:cursor-pointer'>
                    <Link to="/login">
                        <p className=''>Hello , sign in</p>
                    </Link>
                    <Link to="/account">
                        <p className='font-bold '>Accounts & Lists</p>
                    </Link>
                </div>
                <div className='md:ml-10 md:h-12 md:pb-2 md:px-2  hover:border border-white hover:cursor-pointer'>
                    <p className=''>Return</p>
                    <p className=' font-bold'>&Orders</p>
                </div>
                <div className='md:ml-10 hover:border border-white  hover:cursor-pointer md:h-12'>
                    <Link to="/cart" className='text-4xl'>🛒</Link>
                </div>
            </section>
            <section className=' md:justify-between flex   relative top-16 bg-gray-800 md:h-12'>
                <ul className='flex justify-between mt-2'>
                    <li onClick={handleClick} className='hover:border border-white h-9 hover:cursor-pointer md:ml-5 font-semibold flex  p-1'>
                        <img src={bars} alt="" className='h-8' />
                        <p className='mt-1'>All</p>
                    </li>
                    <li className='hover:border border-white h-9 p-2  hover:cursor-pointer md:ml-2'>
                        <a href="https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_grocery">fresh</a>
                    </li>
                    <li className='hover:border border-white h-9  p-2 hover:cursor-pointer md:ml-2'>
                        <a href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">Amazon miniTV</a>
                    </li>
                    <li className='hover:border border-white h-9 p-2  hover:cursor-pointer md:ml-2'>
                        <a href="https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3">Sell</a>
                    </li>
                    <li className='hover:border border-white h-9 p-2  hover:cursor-pointer md:ml-2'>
                        <a href="https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers">Best Seller</a>
                    </li>
                    <li className='hover:border border-white h-9  p-2 hover:cursor-pointer md:ml-2'>
                        <a href="https://www.amazon.in/deals?ref_=nav_cs_gb&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522">Today's Deals</a>
                    </li>
                    <li className='hover:border border-white h-9  p-2 hover:cursor-pointer md:ml-2'>
                        <a href="https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles">Mobiles</a>
                    </li>
                    <li className='hover:border border-white h-9  p-2 hover:cursor-pointer md:ml-2'>Kitchen</li>
                    <li className='hover:border border-white h-9  p-2 hover:cursor-pointer md:ml-2'>Fashions</li>
                    <li className='hover:border border-white h-9  p-2 hover:cursor-pointer md:ml-2'>Electronics</li>
                    <li className='hover:border border-white h-9  p-2 hover:cursor-pointer md:ml-2'>New Releases</li>
                </ul>
                <div className=' hover:border border-white w-1/3 '>
                    <a href="https://www.amazon.in/events/greatfreedomsale/&ref_=ine_gw_a24_swm_en_ecom/?_encoding=UTF8&ref_=nav_swm_swm_gd&pf_rd_p=56074567-7d17-4913-9b78-8ec30d6d6fd9&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=J6WCKK7QCC1TWS2RK794" className='flex md:pl-44'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXJAvyR_Xlrr6x3JUPxls_Av3jrDMOMUucO0zZXK89Z-bfuPHoRNAXnjxYg&s" className='h-12' alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJshSYTSKOc7lIkrn-CubOb0HkltHn-3wI8Q&s" alt="" className='h-12 w-80 m' />
                    </a>
                </div>
            </section>
            {current && <aside className='text-black fixed top-0 left-0 z-10 w-screen h-screen bg-gray-800 bg-opacity-50'>
                <div className='fixed w-1/3 h-full bg-white overflow-y-scroll'>
                    <div className='flex fixed w-1/3 justify-between items-center bg-gray-800 p-4 z-10'>
                        <h2 className='text-3xl font-semibold text-white'>Hello, sign in</h2>
                        <button onClick={handleClick} className='text-black text-3xl'>&#10005;</button>
                    </div>
                    <ul className='p-4 relative top-14'>
                        <li className='text-2xl h-20  md:5 md:p-4 font-semibold'>Trending</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Best Sellers</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>New Releases</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Movers and Shakers</li>
                        <hr />
                        <li className='text-2xl h-20 md:5 md:p-4  font-semibold'>Digital Content and devices</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>amazon miniTv -FREE</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Echo & Alexa</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Fire TV</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Kindle E-readers & ebooks</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Audible Audiobooks</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>amazon prime video</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Amazon Prime Music</li>
                        <hr />
                        <li className='text-2xl h-20 md:5 md:p-4  font-semibold'>Shop by category</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Mobiles ,Computers</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>TV ,Appliances , Electronics</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Men fashion</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Womens fashion</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>See all</li>
                        <hr />
                        <li className='text-2xl h-20 md:5 md:p-4  font-semibold'>Programs & features</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Amazon Pay</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Gift Cards & Mobile Recharge</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Amazon Launchpad</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Amazon Business</li>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>See all</li>

                        <hr />
                        <li className='text-2xl h-20 md:5 md:p-4  font-semibold'>Help & Settings</li>
                        <Link to="/account">
                            <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Your Account</li>
                        </Link>
                        <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Customer Service</li>
                        <Link to="/signup">
                            <li className=' h-14 md:5 md:p-4  hover:bg-gray-200 '>Sign in</li>
                        </Link>

                    </ul>
                </div>
            </aside>}
            {/* <div className='md:h-96 flex flex-wrap'>
                {filteredProducts.map((product, idx) => (
                    <div key={idx} className='flex p-4'>
                        <div className='bg-slate-200 md:pt-8 md:px-14 rounded-l-lg'>
                            {product.images && product.images.length > 0 && (
                                <img
                                    src={product.images[0].image_url}
                                    alt={product.images[0].alt_text}
                                    className='md:h-64 md:w-52'
                                />
                            )}
                        </div>
                        <div className="md:px-10 border border-gray-300 w-3/4 rounded-r-md">
                            <ul className='md:mt-8'>
                                <li className='text-2xl font-bold'>{product.name}</li>
                                <li className='text-lg'>&#9733;&#9733;&#9733;&#9733;&#9733;</li>
                                <li className='text-2xl'>
                                    <sup>$</sup>{product.price.$numberDecimal}
                                </li>
                                <button className='rounded-xl py-1 px-2 border border-gray-400'>
                                    See Options
                                </button>
                            </ul>
                        </div>
                    </div>
                ))} */}


        </div>
    )
}
