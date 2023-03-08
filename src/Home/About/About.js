import React from 'react';
// import img from '../Home/img.webp'
// import img from '../About/black.png'
import img from '../About/black.jpg'

const About = () => {
    var Blur = require('react-blur');
    return (
        <div className='pb-6 '>

            <div className="hero ">

                <div className="hero-content flex-col lg:flex-row px-6">
                    <img  src={img} alt='' className="max-w-sm rounded-lg shadow-2xl lg:w-full rounded-full " />
                    {/* <Blur img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl lg:w-full rounded-full" blurRadius={5} enableStyles>   The content. </Blur> */}
                    <div>
                        {/* <h1 className="text-5xl font-bold"></h1> */}
                        <h1 className='text-3xl font-bold text-warning pb-3 '>WHO AM I</h1>
                        <p className='py-6'>My Name is md Sujon mia.I am a student of Daffodil international university.Department of software engineering .I have basic knowledge of programing.previous few years.I love programing and problem solving.On the other hand I learned web developing . I can make a unique idea of UX design.This is my hidden talent. </p>


                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;