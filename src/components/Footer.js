import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-8 relative w-screen bottom-0">
            <div className=" ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-10">
                    <div>
                        <h4 className="font-bold mb-4">Get to Know Us</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Press Releases</a></li>
                            <li><a href="#" className="hover:underline">Amazon Science</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Connect with Us</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Make Money with Us</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
                            <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
                            <li><a href="#" className="hover:underline">Protect and Build Your Brand</a></li>
                            <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
                            <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                            <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
                            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
                            <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Let Us Help You</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">COVID-19 and Amazon</a></li>
                            <li><a href="#" className="hover:underline">Your Account</a></li>
                            <li><a href="#" className="hover:underline">Returns Centre</a></li>
                            <li><a href="#" className="hover:underline">Recalls and Product Safety Alerts</a></li>
                            <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
                            <li><a href="#" className="hover:underline">Amazon App Download</a></li>
                            <li><a href="#" className="hover:underline">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className=' border-t border-gray-700 flex justify-center md:pt-5 text-center md:mt-5'>
                    <div className='mt-2'>
                        <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png" alt="" className='h-6 ' />
                    </div>
                    <div className='md:ml-16 border border-gray-300 py-1 px-5 rounded'>
                        <button>English</button>
                    </div>
                    <div className='md:ml-5  border border-gray-300 py-1 px-5 rounded'>
                        <button>India</button>
                    </div>
                </div>
                <div className='bg-gray-950 md:px-20'>
                    <div className="mt-8 flex justify-between   pt-8">
                        <div>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="hover:underline">AbeBooks</a></li>
                                <li><a href="#" className="hover:underline">Amazon Web Services</a></li>
                                <li><a href="#" className="hover:underline">Audible</a></li>
                                <li><a href="#" className="hover:underline">Shopbop</a></li>
                                <li><a href="#" className="hover:underline">Amazon Business</a></li>
                                <li><a href="#" className="hover:underline">Prime Now</a></li>
                                <li><a href="#" className="hover:underline">Amazon Prime Music</a></li>
                                <li><a href="#" className="hover:underline">IMDb</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center space-x-4">
                                <button className="bg-gray-800 px-4 py-2 rounded text-white">English</button>
                                <button className="bg-gray-800 px-4 py-2 rounded text-white">India</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-xs text-gray-500 pb-5">
                        <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
                        <ul className="flex justify-center space-x-4 mt-2">
                            <li><a href="#" className="hover:underline">Conditions of Use & Sale</a></li>
                            <li><a href="#" className="hover:underline">Privacy Notice</a></li>
                            <li><a href="#" className="hover:underline">Interest-Based Ads</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
