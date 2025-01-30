import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
export default function Cart() {
   
    return (
        <div className='relative top-20 h-screen md:mx-5 flex'>
            <section className='md:w-4/3 bg-white p-5'>
                <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
                <div className='flex md:justify-between'>
                    <a href="#" className='text-teal-700 hover:text-orange-600 hover:underline'>Deselect All items</a>
                    <p className='text-amber-700 mt-3'>Price</p>
                </div>
                <hr className='md:my-3' />
                <div className='flex  bg-white'>
                    <input type="checkbox" name="product" id="product" />
                    <img src="https://m.media-amazon.com/images/I/61WSqqR5MuL._AC_AA180_.jpg" alt="" className='h-60 mt-5' id="product" />
                    <div className='md:p-3'>
                        <p className='text-xl mb-2  font-blod'>SAFARI RAYVOYAGE 55 Cms Cabin Trolley Bag Hard Case Polycarbonate 4 Wheels 360 Degree Wheeling System Luggage, Trolley Bags For Travel, Suitcase For Travel,…</p>
                        <ul>
                            <li className='text-sm mt-2'>in stock</li>
                            <li className='text-sm mt-2'>Eligible for FREE Shipping</li>
                            <li><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></li>
                            <li className='text-sm mt-2'>
                                <input type="checkbox" name="gift" id="gift" />
                                <label htmlFor="gift">This will be a giftThis is a gift  <a href="#"></a>Learn More</label>
                            </li>
                            <li className='mt-2'> <b>Color:</b> Blue/Cyan</li>
                            <li className='my-2'><b>Size:</b>S</li>
                            <li className='border border-gray-400 rounded hover:bg-slate-200 bg-slate-100 w-24 pl-2'>
                                <label htmlFor="quantity">Qty:</label>
                                <select name="quantity" id="quantity" className='bg-slate-100  hover:bg-slate-200'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10+</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className='text-xl font-bold'>
                        <sup>₹</sup>2,407.00
                    </div>
                </div>
                <hr className='md:my-3' />
            </section>
            <section className='md: md:ml-5'>
                <div className='bg-white py-5 px-8 w-80'>
                    <div className="flex items-center mb-">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value="100"
                            className="w-full h-2 bg-green-500 rounded-lg appearance-none cursor-pointer"
                            readOnly
                        />
                        <span className="ml-2 text-green-700 font-semibold">₹499</span>
                    </div>
                    <div className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                        <div className='text-sm'>
                            <p className="text-green-700 font-semibold">
                                Your order is eligible for FREE Delivery.
                            </p>
                            <p className="text-gray-600">
                                Choose <span className=" text-teal-600">FREE Delivery</span> option at checkout.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className=' mt-2 font-blod'>SubTotal(3items) : <b className='font-bold '> <sup>₹</sup>2,407.00</b></p>
                        <div className='text-sm'>
                            <input type="checkbox" name="gift" id="gift" />
                            <label htmlFor="gift" className=''>This order contains a gift</label>
                        </div>
                        <button className='bg-yellow-300 py-1 md:px-14 rounded-2xl mt-3'>
                            Proceed to buy
                        </button>
                        <div className='border border-slate-300 p-3 md:mt-4 rounded flex'>
                            <label htmlFor="emi">EMI Available</label>
                            <select name="emi" id="emi" className='md:ml-20'>
                                <option value="" className='w-36'></option>
                                {/* <option value="" className='w-36'>
                            Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up)
                            </option> */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-5 md:mt-5 px-6 w-80'>
                    <p className='text-lg font-bold'>Pair With Your Cart</p>
                    <div className='flex '>
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/51UQbNeJRZL._AC_UL200_SR200,200_.jpg" alt="" className='h-28' />
                        <ul className='ml-3'>
                            <li className='text-blue-400'>
                                Garnier Skin Natural Bright Complete
                            </li>
                            <li className='text-orange-600'>
                            &#9733;&#9733;&#9733;&#9733; <b className='text-blue-400'>7,676</b>
                            </li>
                            <li className='text-orange-600 font-bold' >₹120</li>
                            <li><button className='px-3 py-1 mt-2 bg-yellow-400  rounded-2xl'  >Add To Cart</button></li>
                        </ul>
                    </div>    
                </div>
            </section>
        </div>
    )
}
