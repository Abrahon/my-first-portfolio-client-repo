import React from 'react';
import img from '../Home/img.webp'

const About = () => {
    return (
        <div className='pb-6 '>

            <div className="hero ">

                <div className="hero-content flex-col lg:flex-row px-6">
                    <img  class src={img} alt='' className="max-w-sm rounded-lg shadow-2xl lg:w-full rounded-full " />
                    <div>
                        {/* <h1 className="text-5xl font-bold"></h1> */}
                        <h1 className='text-4xl font-bold text-secondary-focus pb-3 text-center'>Who am I</h1>
                        <p className='py-6'>My Name is md Sujon mia.I am a student of Daffodil international university.Department of software engineering .I have basic knowledge of programing.previous few years.I love programing and problem solving.On the other hand I learned web developing . I can make a unique idea of UX design.This is my hidden talent. </p>


                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;