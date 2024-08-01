import React from 'react'
import SlideComponent from './SlideComponent';

export default function Homepage() {
    return (
        <div className='relative top-16 '>
            <section>
                <SlideComponent />
            </section>
            <section className='flex  md:justify-around md:m-5'>
                <div className='bg-white p-5'>
                    <h2 className='text-2xl font-bold'>Great Freedom Sale |<br /> Coming soon</h2>
                    <a href="https://www.amazon.in/events/greatfreedomsale/&ref_=IN_Prime_ACQ_AugART24_T1_GW_ATF_Desktop_CC_EventCom_CmngSoon_Eng/?_encoding=UTF8&pd_rd_w=fl2Dg&content-id=amzn1.sym.e0d8b676-a06d-427d-b960-3b19406a3a26&pf_rd_p=e0d8b676-a06d-427d-b960-3b19406a3a26&pf_rd_r=HPM95QHZSHE3XZ8TZ67C&pd_rd_wg=l0fP3&pd_rd_r=509de965-d95e-4f11-8c6a-41a586fe5351&ref_=pd_hp_d_atf_unk">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Aug24/AugART24_GW_PC_CC_1x._SY304_CB567670907_.jpg" alt="" />
                    </a>
                    <a className='text-sm   hover:text-yellow-500 mt-5 text-blue-600' href="https://www.amazon.in/amazonprime/&ref_=IN_Prime_ACQ_AugART24_T1_GW_ATF_Desktop_CC_EventCom_CmngSoon_Eng_seemore/?_encoding=UTF8&pd_rd_w=dyBxT&content-id=amzn1.sym.e0d8b676-a06d-427d-b960-3b19406a3a26&pf_rd_p=e0d8b676-a06d-427d-b960-3b19406a3a26&pf_rd_r=GHPG80RT5X8Y9CQK0GR7&pd_rd_wg=9oRgY&pd_rd_r=47725a79-60cf-4a2d-b338-6266a7b25925&ref_=pd_hp_d_atf_unk">
                        Join Prime
                    </a>
                </div>
                <div className='w-1/3 bg-white p-5 md:ml-5'>
                    <h2 className='text-2xl  md:ml-10 font-semibold'>
                        Appliances for your home |<br /> Up to 55% off
                    </h2>
                    <div className='flex flex-wrap  md:ml-5'>
                        <div className='md:w-44 md:ml-5 md:mt-5  '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center'>WashingMachine</p>
                        </div>
                        <div className='md:w-44 text-center md:ml-5 md:mt-5 '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center'>MicroWave</p>
                        </div>
                        <div className='md:w-44 text-center md:ml-5 md:mt-10 '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center'>Air Conditioner</p>
                        </div>
                        <div className='md:w-44 text-center md:ml-5 md:mt-10  '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center'>Refrigerator</p>
                        </div>

                    </div>
                    <a className=' md:ml-10 text-sm  mt-5 text-blue-600 hover:text-yellow-500' href="https://www.amazon.in/s?bbn=84514735031&rh=n%3A84514735031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=47725a79-60cf-4a2d-b338-6266a7b25925&pd_rd_w=o7wCX&pd_rd_wg=9oRgY&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=GHPG80RT5X8Y9CQK0GR7&ref=pd_hp_d_atf_unk">
                        See More
                    </a>


                </div>
                <div className='w-1/3 bg-white md:ml-5'>
                    <h2 className='text-2xl  md:ml-10 font-semibold'>
                    Revamp your home in <br />style 
                    </h2>
                    <div className='flex flex-wrap  md:ml-5'>
                        <div className='md:w-44 md:ml-5 md:mt-5  '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center overflow-hidden'>Bedsheets ,Cover</p>
                        </div>
                        <div className='md:w-44 text-center md:ml-5 md:mt-5 '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center'>figurines and vases</p>
                        </div>
                        <div className='md:w-44 text-center md:ml-5 md:mt-10 '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center'>Home storage</p>
                        </div>
                        <div className='md:w-44 text-center md:ml-5 md:mt-10  '>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" alt="" className='w-36  md:ml-' />
                            <p className='text-center'>Lighting solutions</p>
                        </div>

                    </div>
                    <a className='text-sm   md:ml-10 mt-5 text-blue-600 hover:text-yellow-500' href="https://www.amazon.in/s?bbn=84514735031&rh=n%3A84514735031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=47725a79-60cf-4a2d-b338-6266a7b25925&pd_rd_w=o7wCX&pd_rd_wg=9oRgY&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=GHPG80RT5X8Y9CQK0GR7&ref=pd_hp_d_atf_unk">
                        Explore All
                    </a>
                </div>
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>


        </div>
    )
}
