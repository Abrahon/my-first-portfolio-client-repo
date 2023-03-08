import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MySkills from '../MySkills/MySkills';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'



const Home = () => {
    return (
        <div>

            <IconContext.Provider value={{ color: 'red', size: 30 }}>
                <div>

                    <a className='btn btn-outline color-blue  mr-5' href='https://www.facebook.com/ABRAHON?mibextid=ZbWKwL'><FaFacebook  >

                    </FaFacebook>
                    </a>
                    <a className='btn btn-outline  mr-5' href='https://github.com/Abrahon'><FaGithub></FaGithub></a>
                    <a className='btn btn-outline ' href='https://www.linkedin.com/in/md-sujon-mia-2172a524b/'><FaLinkedin></FaLinkedin></a>
                </div>

            </IconContext.Provider>



            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 p-10'>
                <p>
                    {/* <h2 className='text-3xl font-bold text-orange-600'>I am a delivery boy.This website created with food service for people. Here we have many items of food available .Do you have any interested ! you can buy for cheap price .</h2> */}
                    <h1 className="text-3xl font-bold mb-6">HI THERE! <br /> <span className='text-orange-600'> </span><br /><span className='text-3xl'></span>
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["I'M ABRAHON MAHMUD SUJON!" , "A WEB DEVELOPER "]}
            // words={["I' M ABRAHON MAHMUD SUJON"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
         
          />
        </span>
                    </h1>
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
                        <Link className='btn btn-primary  bg-gradient-to-r from-purple-500 to-pink-500' to='/contact'>Hire me</Link>
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