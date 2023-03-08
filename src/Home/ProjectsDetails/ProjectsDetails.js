import React from 'react';
import img1 from '../Projects/Screenshot-1.png'
import img2 from '../Projects/Screenshot -2.png'
// import { Text, View, SafeAreaView, FlatList } from 'react-native';

const ProjectsDetails = () => {
    return (
        <div className=''>
            {/* <h1 className="text-3xl">This is projects details</h1> */}
            <div className="card card-compact lg:w-1/2 center bg-base-100 shadow-xl ">
              
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.pinimg.com/474x/60/f1/0f/60f10f71e2a7e73c8d09ecbcae9f8bdb.jpg" alt= '' className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img1} alt='' className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img2} alt='' className="w-full" />
                    </div>
                   
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>

                <h2 className="card-title text-2xl text-orange-600">Food review</h2>

                <div className="card-body">
                    <p className='text-xl'>Food service and reviews website.It's a made by me for food services.</p>
                    <div className="card-actions justify-between mb-10">
                        <a className='btn btn-primary' href='https://github.com/Abrahon/my-food-review-service-clients-repo'>Client site</a>
                        <a className='btn btn-primary' href='https://github.com/Abrahon/my-food-review-server-repo'>Server site</a>
                        <a className='btn btn-primary' href='https://online-food-review.web.app/'>Live server</a>

                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mb-3'>FEATURES :</h1>
                        {/* <Text style={{ fontSize: 20 }}>{`\u25CF ${item.key}`}</Text> */}
                        <ul className='mb-10 text-xl'>
                            <li>. This website make by different types food items. </li>
                            <li>. Like Noodles,Roll,Biriany etc.</li>
                            <li>. Here we use email authentication</li>
                            <li>. User can't visit this website without email registration and login.</li>
                            <li>. Then  user will be  able to reviews any products. He can update his/her review. And he can delete his/her reviews any time. </li>
                            <li>. This very interesting website for reviews and services.</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-6 ">TECHNOLOGY</h1>
                        <div className='card-actions justify-between g-6 mb-6"'>
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
    );
};

export default ProjectsDetails;