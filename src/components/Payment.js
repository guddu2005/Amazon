import React, { useContext } from 'react'
import image from "./Amazon-India-Logo-PNG-HD-removebg-preview.png"
import { AddressContext } from "../context/AddressContext"
import { Link } from 'react-router-dom';

const AddressCard = ({ address, isDefault, onDelete }) => {
    // const handleDelete = async () => {
    //     const url = `http://localhost:5000/address/delete/${address._id}?_method=DELETE`; // Add query parameter _method=DELETE
    //     const options = {
    //         method: "POST", // Use POST method to send the _method query parameter
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ _id: address._id }),
    //     };

    //     try {
    //         const resp = await fetch(url, options);
    //         if (!resp.ok) {
    //             throw new Error(`HTTP error: ${resp.status}`);
    //         }

    //         const data = await resp.json();
    //         console.log(data);
    //         onDelete(address._id);
    //     } catch (err) {
    //         console.error('Error deleting address:', err);
    //     }
    // };


    return (
        <div className={`border p-5 rounded-md shadow-md ${isDefault ? 'border-blue-500' : 'border-gray-300'}`}>
            {isDefault && <span className="text-sm text-blue-500 font-semibold">Default</span>}
            <h2 className="font-bold text-lg">{address.fullName}</h2>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.pinCode}</p>
            <p>{address.country}</p>
            <p className="mt-2">Phone number: {address.mobileNumber1}</p>
        </div>
    );
};
// }, []);

export default function Payment() {


    const addresses = useContext(AddressContext)
    return (
        <div className='mb-10 bg-white w-full'>
            <section className='bg-gradient-to-b from-white to-gray-100 border border-slate-300 h-20 md:p-5 md:mx-2 '>
                <ul className='flex justify-around md:mx-24'>
                    <li>
                        <img src={image} alt="" className='h-10' />
                    </li>
                    <li className='text-2xl font-semibold'>Checkout</li>
                    <li>
                        <img src="https://m.media-amazon.com/images/G/31/x-locale/checkout/truespc/secured-ssl._CB485936980_.png" alt="" />
                    </li>
                </ul>
            </section>
            <section className='flex md:mx-10'>
                <section className='w-2/3 mt-5 '>
                    <ul className='flex md:justify-around'>
                        <li className='text-xl font-bold '>1. Delivery Address</li>
                        <li className='md:w-1/2'>
                            {addresses.map((address) => (
                                <AddressCard key={address._id} address={address} isDefault={address.isDefault} />
                            ))}
                            <a href="" className='text-teal-700'>Add Delivery instrctions</a>
                        </li>
                        <li className='text-teal-700 md:mr-10'><Link to="/address">Change</Link></li>
                    </ul>
                    <hr className='md:my-5 mx-20' />
                    <div>
                        <p className='text-xl text-orange-700 font-semibold md:my-3 md:ml-24'>2. Select youy Payment Mode</p>
                        <form action="" className='flex flex-col border border-slate-300 rounded-lg md:mb-10  md:mx-20 '>
                            <label htmlFor="balance" className='text-xl font-bold px-5 py-3'>Your available Balance:</label>
                            <hr className='my-2 mx-6' />
                            <div className='flex  md:py-2  mb-1'>
                                <img src="https://m.media-amazon.com/images/G/01/payments-portal/r1/cursor-pointer._CB454652023_.png" alt="" className='h-6 md:ml-1 mt-1' />
                                <input type="text" name='balance' placeholder='Enter Code' className='border border-slate-500 rounded p-1 md:ml-2 focus:border-teal-800 focus:ring-4 w-72 shadow-slate-400 shadow-sm ' />
                                <button className='rounded-2xl border border-slate-400 px-5 md:ml-2 text-sm' type='submit'>Apply</button>
                            </div>
                            <p className='text-xl font-bold px-5 py-3'>Another Payment Method</p>
                            <hr className='my-2 mx-6  ' />
                            <div className=' h-20  py-6  px-5 md:mx-6 hover:border hover:border-orange-400 hover:bg-red-50 rounded '>
                                <input type="radio" name="creditcard" id="" />
                                <label htmlFor="payment_method" className='ml-3  text-lg font-semibold'>Credit Card/ debit card</label>
                            </div>
                            <div className=' h-20  md:mx-6 py-6  px-5 hover:border hover:border-orange-400 hover:bg-red-50 rounded '>
                                <input type="radio" name="netbanking" id="" />
                                <label htmlFor="payment_method" className='ml-3  text-lg font-semibold'>Net Banking</label>
                                <select name="netbanking" id="" className='p-1 rounded ml-2 '>
                                    <option value="Choose an option">Choose an option</option>
                                    <option value="Choose an option">Choose an option</option>
                                    <option value="Choose an option">Choose an option</option>
                                    <option value="Choose an option">Choose an option</option>
                                    <option value="Choose an option">Choose an option</option>
                                </select>
                            </div>
                            <div className='md:mx-6 h-20  py-6  px-5 hover:border hover:border-orange-400 hover:bg-red-50 rounded '>
                                <input type="radio" name="otherupi" id="" />
                                <label htmlFor="payment_method" className='ml-3  text-lg font-semibold'>Other UPI Apps</label>
                            </div>
                            <div className='md:mx-6 h-20  py-6  px-5 hover:border hover:border-orange-400 hover:bg-red-50 rounded '>
                                <input type="radio" name="EMI" id="" />
                                <label htmlFor="payment_method" className='ml-3 text-lg font-semibold'>EMI</label>
                            </div>
                            <div className='md:mx-6 mb-5 h-20  py-6  px-5 hover:border hover:border-orange-400 hover:bg-red-50 rounded '>
                                <input type="radio" name="CashonDelivery" id="" />
                                <label htmlFor="payment_method" className='ml-3  text-lg font-semibold'>Cash on Delivery/Pay on Delivery</label>
                            </div>
                            <div className='text-sm bg-gray-200 px-6 py-4 opacity-70 md:h-16'>
                                <p className='w-48 px-2 py-1 rounded-2xl border border-orange-400'> use this payment method</p>
                            </div>
                        </form>
                    </div>
                    <hr className='' />
                    <p className='text-xl opacity-60 font-semibold md:my-3 md:ml-20'>3. Offers</p>
                    <hr />
                    <p className='text-xl opacity-60 font-semibold md:my-3 md:ml-20'>4. Items And Delivery</p>
                    <hr />
                    <p className='text-sm md:my-3 md:ml-20 opacity-60'>

                        Need help? Check our help pages or contact us
                        When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card, debit card or net banking), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.
                        See Amazon.in's Return Policy.

                        Need to add more items to your order? Continue shopping on the Amazon.in homepage.
                    </p>
                </section>
                <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow-md p-4 w-1/5 mt-5 sticky top-5">
                    <div className="bg-yellow-400 text-center py-2 rounded-lg mb-4">
                        <button className="text-black font-medium">
                            Use this payment method
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 text-center mb-4">
                        Choose a payment method to continue checking out. You will still have a chance to review and edit your order before it is final.
                    </p>

                    <hr className="mb-4" />

                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>

                    <div className="text-sm text-gray-800 mb-2">
                        <div className="flex justify-between">
                            <span>Items:</span>
                            <span>₹1,999.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery:</span>
                            <span>--</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total:</span>
                            <span>--</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Promotion Applied:</span>
                            <span>--</span>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <div className="text-lg font-semibold text-red-700 mb-4 flex justify-between">
                        <span>Order Total:</span>
                        <span>--</span>
                    </div>

                    <div className="text-sm text-blue-600 text-center mt-4">
                        <a href="#">How are delivery costs calculated?</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
