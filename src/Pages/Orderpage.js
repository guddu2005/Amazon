import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import OrderView from './OrderView';

const OrderPage = () => {
    const products = useContext(ProductContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async function fetchOrders() {
            const url = "http://localhost:5000/order/";
            const option = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            try {
                const resp = await fetch(url, option);
                if (!resp.ok) {
                    throw new Error(`HTTP is not responding: ${resp.status}`);
                }
                const data = await resp.json();
                // console.log("orders", data.orders);
                setOrders(data.orders);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    console.log("orders:" ,orders);

    return (
        <div className="container mx-auto my-8 relative top-16 px-5">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Your Orders</h1>
                <input
                    type="text"
                    placeholder="Search all orders"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                />
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                    Search Orders
                </button>
            </div>
            <div className="flex mt-4 space-x-6">
                <div className="border-b-2 border-orange-500 pb-2 cursor-pointer">
                    Orders
                </div>
                <div className="pb-2 cursor-pointer text-gray-500 hover:text-black">
                    Buy Again
                </div>
                <div className="pb-2 cursor-pointer text-gray-500 hover:text-black">
                    Not Yet Shipped
                </div>
                <div className="pb-2 cursor-pointer text-gray-500 hover:text-black">
                    Cancelled Orders
                </div>
            </div>
            <div className="mt-6">
                <div className="text-lg text-gray-600">0 orders placed in</div>
                <select className="border border-gray-300 rounded-lg px-4 py-2 mt-2">
                    <option>All orders</option>
                    <option>past 1 week</option>
                    <option>past 1 month</option>
                    <option>past 3 months</option>
                    {/* Add more options here */}
                </select>
                <OrderView orders={orders} />
                <div className="mt-6 text-gray-600">
                    Looks like you haven't placed an order in the last 3 months.{' '}
                    <a href="#" className="text-blue-600">
                        View orders in 2024
                    </a>
                </div>
            </div>
            <hr className='mt-14 mx-10' />
            <div>
                <div className='md:mr-3 flex w-screen overflow-x-scroll'>
                    {products.map((item, idx) => (
                        <div key={idx} className="mt-5 flex items-center">
                            <Link to={`/view/${item._id}`} className="items-center space-x-4">
                                {item.images && item.images.length > 0 && (
                                    <img
                                        src={item.images[0].image_url}
                                        alt={item.title}
                                        className="w-40 h-40 object-cover rounded"
                                    />
                                )}
                                <div className='md:w-44 underline text-orange-800 hover:text-blue-400 mt-5'>
                                    <h3 className="text-sm font-semibold">{item.name}</h3>
                                    <p className='text-lg'>{item.description.substring(0, 50)}</p>
                                    <p className='font-semibold mt-2 text-black underline text-2xl'>
                                        <sup className='md:mt-10'>₹</sup>{item.price?.$numberDecimal?.toString() || item.price}
                                        <p className='text-sm ml-2 mt-2'>M.R.P. : ${item.price?.$numberDecimal?.toString() || item.price} (54% off)</p>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderPage;

