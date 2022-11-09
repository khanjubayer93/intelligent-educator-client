import React from 'react';

const SliderItem = ({ slide }) => {
    const { image, id, prv, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative flex justify-center w-full">
            
            <div className='flex justify-center'>
                <img src={image} className="rounded" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prv}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            
        </div>
    );
};

export default SliderItem;