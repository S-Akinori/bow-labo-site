'use client'
import React from 'react';
import Image from 'next/image';
import FadeIn from './fade-in';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


interface GalleryProps {
    imagePaths: string[];
}

const Gallery: React.FC<GalleryProps> = ({ imagePaths }) => {
    return (
        <>
            <div className="flex flex-wrap h-[70vh] hidden md:flex">
                <FadeIn className="w-1/3 p-2 relative">
                    <Image src={imagePaths[0]} alt="Image 1" fill className="object-cover" />
                </FadeIn>
                <FadeIn className="w-2/3 p-2 relative" delay={500}>
                    <Image src={imagePaths[1]} alt="Image 2" fill className=" object-cover" />
                </FadeIn>
            </div>
            <div className="h-[70vh] md:hidden">
                <Swiper spaceBetween={50} slidesPerView={1} className='h-full'>
                    {imagePaths.map((path, index) => (
                        <SwiperSlide key={index}>
                            <Image src={path} alt={`Image ${index + 1}`} fill className="object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Gallery;
