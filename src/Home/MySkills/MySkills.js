import React from 'react';
import { Link } from 'react-router-dom';
import './MySkills.css'

const MySkills = () => {
    return (
        <div className='skills'>
            <h1 className='text-3xl font-bold text-center text-warning pb-5'> MY SKILLS </h1>
            <div className='content hero-content flex-col w-full; lg:flex-row-reverse'>
                <div className="left">
                   <p className='text-xl'>I am a web developer I also know of HTML, CSS, Javascript, React js, Mongo db, Node js, node express js, C programing language, C++, basic python. And I  also know css frame work like bootstrap, tailwind, and react component daisyUi. </p>
                    {/* <a className='btn btn-bg-orange500' href="#">Red More</a> */}
                   

                </div>
                <div className="right">
                    <div className="line">
                        <div className="info">
                            <span>HTML</span>
                            <span> 90%</span>
                            
                        </div>
                        <div className="bar html">
                    
                        </div>

                    </div>
                    <div className="line">
                        <div className="info">
                            <span>CSS</span>
                            <span> 80%</span>
                        </div>
                        <div className="bar css">
                        </div>

                    </div>
                    <div className="line">
                        <div className="info">
                            <span>JavaScript</span>
                            <span> 60%</span>
                        </div>
                        <div className="bar js">

                        </div>

                    </div>
                    <div className="line">
                        <div className="info">
                            <span>ReactJs</span>
                            <span> 70%</span>
                        </div>
                        <div className="bar react">

                        </div>

                    </div>
                    <div className="line">
                        <div className="info">
                            <span>MongoDb</span>
                            <span> 50%</span>
                        </div>
                        <div className="bar db">

                        </div>

                    </div>
                    <div className="line">
                        <div className="info">
                            <span>NodeJs</span>
                            <span> 40%</span>
                        </div>
                        <div className="bar node">

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MySkills;