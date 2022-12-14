import React from 'react';

const ProjectsDetails2 = () => {
    return (
        <div>
            <h1 className="text-3xl">This is projects details</h1>
            <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
                <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                    <a className='btn btn-outline btn-secondary' href='https://github.com/Abrahon/my-online-course-clients-repo'>client site</a>
                    <a className='btn btn-outline btn-secondary' href='https://github.com/Abrahon/my-online-course-server-repo'>Server site</a>
                    <a className='btn btn-outline btn-secondary' href='https://online-course-30fa9.web.app/'>Live site</a>

                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>FEATURES:</h1>
                        {/* <Text style={{ fontSize: 20 }}>{`\u25CF ${item.key}`}</Text> */}
                        <ul>
                            <li>- Instagram</li>
                            <li>- WhatsApp</li>
                            <li>- Oculus</li>
                        </ul>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails2;