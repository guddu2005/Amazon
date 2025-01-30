import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DescriptionSlide3 = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} className='mx-5 h-screen' >
            <div className='h-'>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/996bec68-b42a-459d-8960-2e49bc9d87f1.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9d0f3a11-69d8-4cbf-89fc-ff37b0e4663a.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a95b2b2f-3dea-44e8-95e2-c249bb41c186.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>

        </Carousel>

    );
}

export default DescriptionSlide3;
