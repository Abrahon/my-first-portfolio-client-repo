import React from 'react';

const ProjectsDetails1 = () => {
    return (
        <div>
            {/* <h1 className="text-3xl">This is projects details</h1> */}
            <div className="card card-compact lg:w-1/2 bg-base-100 shadow-xl">
                {/* <figure><img className='w-full' src="https://reactjsexample.com/content/images/2021/12/Doctors-Portal.jpg" alt="Shoes" /></figure> */}
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://reactjsexample.com/content/images/2021/12/Doctors-Portal.jpg" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    </div>
                    
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
                <h2 className="card-title">Doctors Portal</h2>

                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between mb-10">
                        {/* <button className="btn btn-primary">Buy Now</button>
                         */}
                        <a className='btn btn-outline btn-secondary' href='https://github.com/Abrahon/my-detist-portal.repo'>client site</a>
                        <a className='btn btn-outline btn-secondary' href='https://github.com/Abrahon/my-dentist-portal-server-repo'>Server site</a>
                        <a className='btn btn-outline btn-secondary' href='https://doctors-portal-a452b.web.app/'>Live site</a>

                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>FEATURES:</h1>
                        {/* <Text style={{ fontSize: 20 }}>{`\u25CF ${item.key}`}</Text> */}
                        <ul className='mb-10 text-xl'>
                            <li>. This website created for dentist patient </li>
                            <li>. Here we use the time slots for patients .They can booking the date.</li>
                            <li>. Here we use Email firebase authentication </li>
                            <li>. Here we use dashboard route .Dash board route is a private route user can't visit without signup.</li>
                            <li>. Here is admin and admin is a powerful.Admin can add the doctors and delete the doctors.</li>
                            <li>. Here we use payment method by the paypal system</li>
                        </ul>
                        <div>
                            <h1 className="text-3xl font-bold mb-6">TECHNOLOGY</h1>
                            <div className='card-actions justify-between g-6"'>
                                <button className="btn btn-outline btn-secondary">CSS</button>
                                <button className="btn btn-outline btn-secondary">REACT JS</button>
                                <button className="btn btn-outline btn-secondary">NODE JS</button>
                                <button className="btn btn-outline btn-secondary">MONGODB</button>
                                <button className="btn btn-outline btn-secondary">EXPRESS JS</button>
                                <button className="btn btn-outline btn-secondary">Tailwind</button>
                                <button className="btn btn-outline btn-secondary">DaisyUi</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails1;