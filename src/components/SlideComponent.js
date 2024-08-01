import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SlideComponent = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} >
            <div className='h-96'>
                <img src="https://m.media-amazon.com/images/G/31/img22/WLA/2024/AugART_24/Teaser/Bigbets/Non_headsets/ezgif-3-bbdcd86cc7._CB567612615_.gif" alt=""  className='h-96'/>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/img22/WLA/2024/Newlaunch/truke/Buds_liberty/v1/V2/sale/D146078158_IN_WLA_new_launch_truke_yoga_1400x800._CB567460554_.gif" alt="" className='h-96' />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg" alt="" className='h-96' />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/SVD/Aug24/Unrec-PC-3000._CB567814834_.jpg" alt="" className='h-96' />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/August/GW/Olympics/3000_x_1200_Unrec_PC._CB568042317_.png" alt="" className='h-96' />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/Unrec/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB582928607_.jpg" alt="" className='h-96' />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/BAU/Unrec/PC/2._CB567657923_.jpg" alt="" className='h-96' />
            </div>
        </Carousel>
    );
}

export default SlideComponent;
