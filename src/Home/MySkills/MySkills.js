import React from 'react';
import { Link } from 'react-router-dom';
import './MySkills.css'

const MySkills = () => {
    return (
        <div className='skills'>
            <h1 className='text-4xl font-bold text-center text-green-500 pb-5'> My skills </h1>
            <div className='content hero-content flex-col w-full; lg:flex-row-reverse'>
                <div className="left">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero ea voluptates quidem magni animi itaque. Tempora eum autem nemo, quae, et odit natus modi quas quod eligendi, quam sapiente?
                    </p>
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