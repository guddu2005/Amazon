import React, { useState, useContext , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import image from "./offers png.png";
import ProductImage from './productImage';
import DescriptionSlide1 from '../Slides/DescriptionSlide1';
import DescriptionSlide2 from '../Slides/DescriptionSlide2';
import DescriptionSlide3 from '../Slides/DescriptionSlide3';
import { Link } from 'react-router-dom';
import "../App.css";
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import axios from 'axios';



const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function ProductView() {
    const { addToCart } = useContext(CartContext);
    // const user  = useContext(UserContext); // Access current user
    // console.log("user:" , user);


    const [user, setUser] = useState(() => {
        const users = JSON.parse(localStorage.getItem('user'));
        return users || null;
    });
    const userId = localStorage.getItem('userid');
    console.log("userId" , userId )
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    
    
    //User section
    
    const product = useContext(ProductContext);
    const { _id } = useParams();
    const item = product.find(p => p._id === _id);
    console.log("item" , item);
    const category = item.category;
    const filteredProduct = product.filter(p => p.category === category);
    
    const imgs = [
        { url: item.images[0].image_url },
        { url: item.images[1].image_url },
        { url: item.images[2].image_url },
        { url: item.images[3].image_url },
        { url: item.images[4].image_url },
        { url: item.images[0].image_url },
    ];

    const [isBig, setIsBig] = useState(false);
    const [selectedImage, setSelectedImage] = useState(imgs[0].url);
    const [backgroundImage, setBackgroundImage] = useState('');
    
    const handleClick = (img) => {
        setSelectedImage(img);
    };

    const handlechange = (img) => {
        setBackgroundImage(`url(${img})`);
    };

    const handleAddToCart = async (e) => {
        e.preventDefault();
        // if (!userId) {
            // alert('You need to be logged in to add items to the cart.');
            // return;
        // }
        const cartItem = {
            userId: userId, // Use current user's ID
            productId: item._id,
            quantity: 1, // Adjust quantity as needed
        };
        // console.log("cartITEM", cartItem);

        await addToCart(cartItem); // Call the context function
    };

    
    const shuffledproducts = shuffleArray([...product]);
    const allElements = shuffledproducts.map((item, i) => (
        <div
            key={i}
            className="border border-slate-300 ml-2 w-60 p-3 rounded-md overflow-hidden shadow-md"
        > <Link to={`/view/${item._id}`} >
                <ul className="flex-grow p-2">
                    <li>
                        <img src={item.images[0].image_url} alt="" className='md:h-72 md:w-52' />
                    </li>
                    <li className="mt-2 hover:underline hover:text-orange-600">
                        {item.name}
                    </li>
                    <li className="text-orange-600  hover:border-blue-500 hover:border-2 w-32 pl-2 rounded">
                        &#9733;&#9733;&#9733;&#9733; <b className="text-blue-400">7,676</b>
                    </li>
                    <li className='text-xl '>₹{item.price?.$numberDecimal?.toString() || item.price}</li>
                </ul>
            </Link>
        </div>
    ))

    const elements = filteredProduct.map((item, i) => (
        <div
            key={i}
            className="border border-slate-300 ml-2 w-60 p-3 rounded-md overflow-hidden shadow-md"
        >
            <Link to={`/view/${item._id}`}>
                <ul className="flex-grow p-2">
                    <li>
                        <img src={item.images[0].image_url} alt="" className='md:h-72 md:w-52' />
                    </li>
                    <li className="mt-2 hover:underline hover:text-orange-600">
                        {item.name}
                    </li>
                    <li className="text-orange-600 text-lg hover:border-blue-500 hover:border-2 w-32 pl-2 rounded">
                        &#9733;&#9733;&#9733;&#9733; <b className="text-blue-400">7,676</b>
                    </li>
                    <li className='text-xl'>₹{item.price?.$numberDecimal?.toString() || item.price}</li>
                </ul>
            </Link>
        </div>
    ));

    
    
    
    return (
        <div className='relative top-16 h-full  bg-white'>
            <form onSubmit={handleAddToCart}>

                {isBig && <ProductImage />}
                <div className=' border border-slate-300 px-1 py-2 md:h-14'>
                    <ul className='flex md:justify-between md:mx-5'>
                        <li>
                            <img src="https://m.media-amazon.com/images/G/31/IMG17/Fashion/January/Ingresses/Subnav/Amazon-fashion-logo._CB485923938_.png" alt="" className='h-12 md:w-38' />
                        </li>
                        <li className='mt-2 hover:underline hover:text-orange-500 text-sm'>Women</li>
                        <li className='mt-2 hover:underline hover:text-orange-500 text-sm'>Men</li>
                        <li className='mt-2 hover:underline hover:text-orange-500 text-sm'>Kids</li>
                        <li className='mt-2 hover:underline hover:text-orange-500 text-sm'>Bags & Luggages</li>
                        <li className='mt-2 hover:underline hover:text-orange-500 text-sm'>SportsWear</li>
                        <li className='mt-2 hover:underline hover:text-orange-500 text-sm'>Sales & Deals</li>
                        <li>
                            <img src="https://m.media-amazon.com/images/G/31/img17/Fashion/150-x-50._CB485918503_.jpg" alt="" className='h-10 md:w-38' />
                        </li>
                    </ul>
                </div>
                <div className=' border border-slate-300 px-1 py-2 md:h-10'>
                    <ul className='flex md:justify-between md:mx-5'>
                        <li>Add Area</li>
                        <li>Add Area</li>
                        <li>Add Area</li>
                    </ul>
                </div>
                <section id="product">
                    <ul className='text-xs flex'>
                        <li className='ml-1 hover:underline'>Sponsored</li>
                        <li className='ml-1 hover:underline'>Bags,</li>
                        <li className='ml-1 hover:underline'>Wallets and</li>
                        <li className='ml-1 hover:underline'>Luggage›</li>
                        <li className='ml-1 hover:underline'>Suitcases & Trolley Bags</li>
                    </ul>
                    <div className='flex md:justify-between'>
                        <div className='m-5'>
                            <ul>
                                {imgs.map((image, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            handleClick(image.url);
                                            handlechange(image.url);
                                        }}
                                        className='border border-gray-900 p-1 rounded hover:border-blue-500 hover:border-2 m-2 cursor-pointer'
                                    >
                                        <img src={image.url} alt={`Thumbnail ${index}`} className='h-10' />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:ml-5 md:mr-2 mt-5  w-1/3' style={{ backgroundImage: backgroundImage }}>
                            <img src={selectedImage} alt="Selected" className='w-full' />
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between w-1/2">
                            <div className="md:w-2/3 md:mr-5 border border-slate-300 rounded p-2 pt-5">
                                <ul>
                                    <li className="text-xl font-semibold">
                                        {item.description}
                                    </li>
                                    <li>Visit Safari Store</li>
                                    <li className="text-orange-600 text-lg hover:border-blue-500 hover:border-2 w-32 pl-2 rounded">
                                        &#9733;&#9733;&#9733;&#9733; <b className="text-blue-400">{item.price?.$numberDecimal?.toString() || item.price}</b>
                                    </li>
                                    <li className="text-xs">700+ bought in past month</li>
                                    <hr className="mt-2 mb-3" />
                                    <li className="text-2xl"><i className="text-yellow-400">-70%</i> ₹{item.price?.$numberDecimal?.toString() || item.price}</li>
                                    <li>
                                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="FBA Badge" />
                                    </li>
                                    <li className="text-sm">Inclusive of all taxes</li>
                                    <hr className="mt-2 mb-3" />
                                </ul>
                                <p className="overflow-hidden h-10 flex ml-2">
                                    <img src={image} className='md:h-10' alt="VSX Sprite" />
                                    <b className='md:mt-1 md:ml-4'>Offers</b>
                                </p>
                                <div className="overflow-x-scroll hide-scrollbar flex h- w-full scrollbar-hide">
                                    <div className="flex w-max text-sm">
                                        <div className="border border-slate-300 h-28 ml-2 w-44 rounded-md overflow-hidden shadow-md">
                                            <ul className='flex-grow overflow-hidden p-2'>
                                                <li className='font-bold'>No Cost EMI</li>
                                                <li className=''>Upto ₹202.49 EMI interest savings on select Credit CardsUpto ₹202.49 EMI interest savings on select Credit Cards</li>
                                            </ul>
                                        </div>
                                        <div className="border border-slate-300 h-28 ml-2 w-44 rounded-md overflow-hidden shadow-md">
                                            <ul className='flex-grow p-2'>
                                                <li className='font-bold'>No Cost EMI</li>
                                                <li className=''>Upto ₹202.49 EMI interest savings on select Credit CardsUpto ₹202.49 EMI interest savings on select Credit Cards</li>
                                            </ul>
                                        </div>

                                        <div className="border border-slate-300 h-28 ml-2 w-44 rounded-md overflow-hidden shadow-md">
                                            <ul className='flex-grow p-2'>
                                                <li className='font-bold'>No Cost EMI</li>
                                                <li className=''>Upto ₹202.49 EMI interest savings on select Credit CardsUpto ₹202.49 EMI interest savings on select Credit Cards</li>
                                            </ul>
                                        </div>
                                        <div className="border border-slate-300 h-28 ml-2 w-44 rounded-md overflow-hidden shadow-md">
                                            <ul className='flex-grow p-2'>
                                                <li className='font-bold'>No Cost EMI</li>
                                                <li className=''>Upto ₹202.49 EMI interest savings on select Credit CardsUpto ₹202.49 EMI interest savings on select Credit Cards</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-slate-300 md:w-96 md:mr-5 rounded-md md:p-5 mt-4 md:mt-0 text-sm">
                                <ul>
                                    <li className='text-2xl font-bold'>₹{item.price?.$numberDecimal?.toString() || item.price}</li>
                                    <li>
                                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
                                    </li>
                                    <li className='text-green-400'>
                                        FREE Delivery <b className='text-black'>Tuesday, 13</b>
                                    </li>
                                    <li>Deliver To</li>
                                    <li>In stack</li>
                                    <li>Sold by: Company</li>
                                </ul>
                                <ul className='mt-3'>
                                    <li className='text-base font-bold mb-2'>Add a Protection Plan</li>
                                    <li>
                                        <input type="checkbox" name="waranty" id="warranty" />
                                        <label htmlFor="warranty" className='hover:underline hover:text-orange-600'> 1 Year Extended Warranty</label>
                                    </li>
                                    <li className='mt-1 mb-2'>
                                        <label htmlFor="quantity">Quantity:</label>
                                        <select name="quantity" id="quantity" className='border border-slate-200 rounded p-1 ml-2'>
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="1">5</option>
                                            <option value="1">6</option>
                                            <option value="1">7</option>
                                        </select>
                                    </li>
                                </ul>
                                <div className='flex flex-col'>
                                    <button className='bg-yellow-300 rounded-2xl mt-2 py-2 px-12' type='submit' >Add To Cart</button>
                                    <Link to="/payment" className='bg-yellow-600 rounded-2xl mt-2 py-2 px-14'>Buy Now</Link>
                                </div>
                                <p className='flex ml-2 mt-3 text-cyan-700'> <img src="https://m.media-amazon.com/images/G/31/x-locale/checkout/truespc/secured-ssl._CB485936980_.png" className='h-3 mr-2 mt-1' alt="" />Secure Transaction</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className='mt-10' />
                <p className='text-2xl font-bold mx-5 mt-5'> Related products with free delivery on eligible order Sponsored </p>
                <div className="overflow-x-scroll hide-scrollbar  w-full my-5 mx-2">
                    <div className="flex w-max text-sm">
                        {elements}
                    </div>
                </div>
                <hr className='mt-10' />
                <p className='text-2xl font-bold mx-5 mt-5'>Products Suggested to you</p>
                <div className="overflow-x-scroll hide-scrollbar  w-full my-5 mx-2">
                    <div className="flex w-max text-sm">
                        {allElements}
                    </div>
                </div>
            </form>

            <hr className='mt-10' />
            <p className='text-2xl font-bold ml-8 my-3'>Product Description</p>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4b15ef30-2b10-40f8-8b1d-2dab813d716e.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" className=' ml-5' alt="" />
            <DescriptionSlide1 />
            <DescriptionSlide2 />
            <DescriptionSlide3 />
        </div>
    );
}



































                                            // useEffect(() => {
                                            //     (async function fetchUser() {            
                                            //         const token = localStorage.getItem('authToken');
                                            //         console.log("token" ,token);
                                            //         const options ={
                                            //             method:"GET",
                                            //             headers: { 'Authorization': `Bearer ${token}` }
                                            //         }
                                            //         const url="http://localhost:5000/user/logged";
                                            //         try {
                                            //             const resp = await fetch(url ,options);
                                            //             console.log('resp User:' , resp);
                                            //             if(!resp.ok){
                                            //                 throw new Error(`Error in finding token : ${resp.status}`);
                                            //             }
                                            //             const data = await resp.json();
                                            //             console.log("Ye user ka data:" , data)
                                            //             setUser(data);
                                            //         } catch (err) {
                                            //             console.error('Internal Error:' , err);
                                            //         }
                                            //     })();
                                            // }, []);
