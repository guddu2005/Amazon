import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DescriptionSlide2 = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} className='mx-5 ' >
            <div className='h-'>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/667e99fc-584a-44a5-8661-5b0dff122ab6.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ded431c5-24ba-4c53-994e-725aadf8ed86.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/a95b2b2f-3dea-44e8-95e2-c249bb41c186.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className='h-' />
            </div>

        </Carousel>

    );
}

export default DescriptionSlide2;
