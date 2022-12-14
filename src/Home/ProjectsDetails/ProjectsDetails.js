import React from 'react';
// import { Text, View, SafeAreaView, FlatList } from 'react-native';

const ProjectsDetails = () => {
    return (
        <div className=''>
            <h1 className="text-3xl">This is projects details</h1>
            <div className="card card-compact lg:w-1/2 center bg-base-100 shadow-xl ">
                <figure>
                    <img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                        <a className='btn btn-primary' href='https://github.com/Abrahon/my-food-review-service-clients-repo'>Client site</a>
                        <a className='btn btn-primary' href='https://github.com/Abrahon/my-food-review-server-repo'>Server site</a>
                        <a className='btn btn-primary' href='https://online-food-review.web.app/'>Live server</a>

                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>FEATURES:</h1>
                        {/* <Text style={{ fontSize: 20 }}>{`\u25CF ${item.key}`}</Text> */}
                        <ul>
                            <li>- </li>
                            <li>- WhatsApp</li>
                            <li>- Oculus</li>
                        </ul>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;