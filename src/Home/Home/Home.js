import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MySkills from '../MySkills/MySkills';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
// import img from '../Home/img.webp'

const Home = () => {
    return (
        <div>

            {/* <div className="hero bg-base-200 ml-5 ">
                <div className="hero-content flex-col w-full; lg:flex-row-reverse ">
                    <div className=''>
                    <img src="https://cdn.dribbble.com/users/2005626/screenshots/13950416/media/6492fd3c15dcdf9433763e7af8ed9aa6.png?compress=1&resize=400x300&vertical=top" alt='' className="md:w-full  rounded-lg shadow-2xl" />


                    </div>
                    <div>
                        <h1 className="text-4xl font-bold  w-1/2 mx-auto mb-5">Hi There! <br /> <span className='text-orange-600'>I'm Abrahon Mahmud Sujon </span><br /><span className='text-3xl'>A Web Developer.</span></h1>
    
                        <div>
                           
                            <button className="btn btn-primary  bg-gradient-to-r from-purple-500 to-pink-500 mr-5">
                                <a
                                    className="button"
                                    href="https://drive.google.com/file/d/17Iw8a73_HAqKKiSBkqZats41yaqAAr_h/view?usp=sharing"
                                    download
                                >
                                    Download Resume
                                </a>
                            </button>
                            <button className="btn btn-primary  bg-gradient-to-r from-purple-500 to-pink-500">lets talk</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 p-10'>
                <p>
                    {/* <h2 className='text-3xl font-bold text-orange-600'>I am a delivery boy.This website created with food service for people. Here we have many items of food available .Do you have any interested ! you can buy for cheap price .</h2> */}
                    <h1 className="text-3xl font-bold mb-6">Hi There! <br /> <span className='text-orange-600'>I'm Abrahon Mahmud Sujon </span><br /><span className='text-3xl'>A Web Developer.</span></h1>
                    <div>

                        <button className="btn btn-primary  bg-gradient-to-r from-purple-500 to-pink-500 mr-5">
                            <a
                                className="button"
                                href="https://drive.google.com/file/d/17Iw8a73_HAqKKiSBkqZats41yaqAAr_h/view?usp=sharing"
                                download
                            >
                                Download Resume
                            </a>
                        </button>
                        <button className="btn btn-primary  bg-gradient-to-r from-purple-500 to-pink-500">lets talk</button>
                    </div>

                </p>


                <img className='w-full rounded ' src='https://cdn.dribbble.com/users/2005626/screenshots/13950416/media/6492fd3c15dcdf9433763e7af8ed9aa6.png?compress=1&resize=400x300&vertical=top' alt="" />
            </div>
            <About></About>
            <MySkills></MySkills>
            <Contact></Contact>
            <Projects></Projects>



        </div>
    );
};

export default Home;