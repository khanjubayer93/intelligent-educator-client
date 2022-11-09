import React from 'react';
import img1 from '../../images/slider/slide1.jpg'
import img2 from '../../images/slider/slide2.jpg'
import img3 from '../../images/slider/slide3.jpg'
import img4 from '../../images/slider/slide4.jpg'
import SliderItem from './SliderItem';

const sliderData =[
    {
        image: img1,
        prv:4,
        id:1,
        next:2
    },
    {
        image: img2,
        prv:1,
        id:2,
        next:3
    },
    {
        image: img3,
        prv:2,
        id:3,
        next:4
    },
    {
        image: img4,
        prv:3,
        id:4,
        next:1
    },
]

const Slider = () => {
    return (
        <div className='my-20'>
            <div className="carousel">
                {
                    sliderData.map(slide=> <SliderItem
                    key={slide.id}
                    slide={slide}></SliderItem>)
                }      
            </div>
        </div>
    );
};

export default Slider;