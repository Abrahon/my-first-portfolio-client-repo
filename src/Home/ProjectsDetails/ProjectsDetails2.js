import React from 'react';

const ProjectsDetails2 = () => {
    return (
        <div>
            {/* <h1 className="text-3xl">This is projects details</h1> */}
            <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
                {/* <figure>
                    <img className='w-full' src="https://media-exp1.licdn.com/dms/image/C5612AQFP4B9evIYQ4Q/article-cover_image-shrink_600_2000/0/1647008638595?e=2147483647&v=beta&t=1pMezmhhMoPu0dpK7-rWVpwzXZXj8MXsZQgAzedxr9c" alt="Shoes" />
                </figure> */}
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://media-exp1.licdn.com/dms/image/C5612AQFP4B9evIYQ4Q/article-cover_image-shrink_600_2000/0/1647008638595?e=2147483647&v=beta&t=1pMezmhhMoPu0dpK7-rWVpwzXZXj8MXsZQgAzedxr9c" className="w-full" />
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
                <h2 className="card-title">Online course</h2>

                <div className="card-body ">
                    <p className='text-xl'>This web site help for those who are weak in basic programing they can buy this course.</p>
                    <div className="card-actions justify-between mb-10">
                        <a className='btn btn-outline btn-secondary' href='https://github.com/Abrahon/my-online-course-clients-repo'>client site</a>
                        <a className='btn btn-outline btn-secondary' href='https://github.com/Abrahon/my-online-course-server-repo'>Server site</a>
                        <a className='btn btn-outline btn-secondary' href='https://online-course-30fa9.web.app/'>Live site</a>

                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mb-6'>FEATURES:</h1>
                        {/* <Text style={{ fontSize: 20 }}>{`\u25CF ${item.key}`}</Text> */}
                        <ul className='mb-6 text-xl'>
                            <li>. You can find the various programing and web development course. </li>
                            <li>. Like React js, JavaScript, Html, and Css</li>
                            <li>. You can buy this course reasonable price </li>
                            <li>. This projects we use Email authentication,Register and login form . If you are a new user you have to do signup first. </li>
                            <li>. You can access premium courses  </li>
                            <li>. And you can download the pdf for free </li>
                        </ul>

                        <div>
                            <h1 className="text-3xl font-bold mb-6">TECHNOLOGY</h1>
                            <div className='card-actions justify-between g-6"'>
                                <button className="btn btn-outline btn-secondary">HTML</button>
                                <button className="btn btn-outline btn-secondary">CSS</button>
                                <button className="btn btn-outline btn-secondary">REACT JS</button>
                                <button className="btn btn-outline btn-secondary">NODE JS</button>
                                <button className="btn btn-outline btn-secondary">MONGODB</button>
                                <button className="btn btn-outline btn-secondary">EXPRESS JS</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails2;