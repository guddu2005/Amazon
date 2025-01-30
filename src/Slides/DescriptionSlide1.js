import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DescriptionSlide1 = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} className=' mx-5' >
            <div className='h-'>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/337d608f-6dab-416d-941a-5b9ec4cd8961.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c3b0903a-eb2b-42fd-a299-bf953a2b4850.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ab73d0ca-5c76-4f46-8cbf-3f64de2c41e3.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>

        </Carousel>

    );
}

export default DescriptionSlide1;
