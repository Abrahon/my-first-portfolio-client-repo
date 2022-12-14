import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-5'>My Projects </h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZEI9C-8tqanesdgMY23woSKWK6jXJ-gS8Q&usqp=CAU" alt="Shoes" />
                    </figure>
                    <h2 className="card-title">Shoes!</h2>

                    <div className="card-body">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        {/* <a className="btn btn-primary"
                                   
                                    href="https://online-food-review.web.app/"  
                                >
                                    Live
                                </a> */}
                                <Link className='btn btn-primary' to='/projectsdetails'>Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://themes.getbootstrap.com/wp-content/uploads/2022/01/Geeks-React-1-1200x900.jpg" alt="Shoes" />
                    </figure>
                    <h2 className="card-title">Shoes!</h2>

                    <div className="card-body">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                       
                        <Link className='btn btn-primary' to='/projectsdetails1'>Details</Link>

                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://flatlogic.com/assets/templates/ecommerce_react_template-b16cc994e42e6e3ee6fb608fbea5a34e046e4b304d2293a1301bc0b59caa42dd.png" alt="Shoes" />
                    </figure>
                    <h2 className="card-title">Shoes!</h2>

                    <div className="card-body">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            
                        <Link className='btn btn-primary' to='/projectsdetails2'>Details</Link>

                        </div>
                    </div>
                </div>
              
               
            </div>


        </div>
    );
};

export default Projects;