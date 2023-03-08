import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-5 text-accent'>MY PROJECTS </h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/509287/screenshots/14175012/media/a02f3e1d038af593eee0f83c44361f6a.png?compress=1&resize=400x300" alt="Shoes" />
                    </figure>
                    <h2 className="card-title text-2xl text-orange-600">Food review</h2>

                    <div className="card-body">
                        <p className='text-xl'>Here is  the lot of food item .If have interested you can buy easily.</p>
                        <div className="card-actions justify-end">
                      
                                <Link className='btn btn-primary' to='/projectsdetails'>Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/8421360/screenshots/17895556/frame_48095515_4x.png" alt="Shoes" />
                    </figure>
                    <h2 className="card-title text-2xl text-orange-600">Dentist portal</h2>

                    <div className="card-body">
                        <p className='text-xl'>This website created for dentist patients. patients can be booking their bed and date.</p>
                        <div className="card-actions justify-end">
                       
                        <Link className='btn btn-primary' to='/projectsdetails1'>Details</Link>

                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/6570548/screenshots/16183342/media/29c050497555df6f46edd9103e926129.jpg?compress=1&resize=400x300&vertical=top" alt="Shoes" />
                    </figure>
                    <h2 className="card-title text-2xl text-orange-600">Online course</h2>

                    <div className="card-body">
                        <p className='text-xl'>I'ts a very beginner friendly Online website.Here is various type course include. </p>
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