import React from "react";
import { Link } from "react-router-dom";
// 
const OrderView = ({ orders }) => {


    return (
        <div className=" mx-auto mb- mt-5 bg-white shadow-md rounded-lg">
            {/* Order Details Header */}
            {orders.map((order, idx) => (
                <div key={idx}>
                    <div className="flex justify-between text-sm text-gray-600 mb-4 bg-slate-200 p-4 rounded-t-lg">
                        <div className="flex items-center space-x-2">
                            <div className="font-medium">ORDER PLACED</div>
                            <div className="text-blue-600 font-semibold">{order.order_date}</div>
                        </div>
                        <div>
                            <div className="font-medium">TOTAL</div>
                            <div>₹{order.total_amount}</div>
                        </div>
                        <div>
                            <div className="font-medium">SHIP TO</div>
                            <div className="text-blue-600 font-semibold">{order.user_name}</div>
                        </div>
                        <div className="text-right">
                            <div className="font-medium text-gray-800">ORDER # {order.order_id}</div>
                            <a href="#" className="text-blue-600 text-sm">View order details</a>
                            <span className="mx-2">|</span>
                            <a href="#" className="text-blue-600 text-sm">Invoice</a>
                        </div>
                    </div>

                    {/* Product and Actions */}
                    <div className="flex space-x-4 p-4">
                        <div className="flex-1">
                            <div className="flex-1 px-4">
                                {order.products.map((item, index) => (
                                    <div className="flex">
                                        <div >
                                            {item.images && item.images.length > 0 && (
                                                <img
                                                    src={item.images[0].image_url}
                                                    alt={item.images[0].alt_text}
                                                    className='md:h-32 md:mr-16'                                                />
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">{item.name}</p>
                                            <p>{item.description}</p>
                                            <p className="text-lg font-bold">₹{item.price}</p>
                                            <div className="text-gray-600 text-sm mt-2">
                                                Return window closed on 1 December 2023
                                            </div>
                                            <div className="mt-4 flex space-x-2">
                                                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                                                    <Link to="/payment">  Buy it again </Link>
                                                </button>
                                                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                                                    <Link to={`/view/${item.product_id}`}>View your item </Link>
                                                </button>
                                                <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500">
                                                    Get product support
                                                </button>
                                                <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100">
                                                    <Link to="/review">Write a product review</Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Archive Order */}
                    <div className="mt-4 text-teal-700 text-sm text-right p-4 mr-4">
                        <a href="#" className="hover:underline">Archive order</a>
                    </div>
                </div>
            ))}
        </div>
    );
};
// 
export default OrderView;
