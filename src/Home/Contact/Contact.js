import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uipwvsg',
            'template_0qxo5t9',
            form.current,
            'AdG1o9Yhr1_v84v9P')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                
            },
                (error) => {
                    console.log(error.text);
                });
    };
    return (
        <div className=' flex justify-center items-center drop-shadow-2xl '>

                <div className='lg:w-1/2 md:w-full sm:w-full mb-10 '>
                    <h1 className='text-3xl font-bold text-orange-600 text-center'>CONTACT ME</h1>

                    <form ref={form} onSubmit={sendEmail}>
                        <label className='form-control w-full max-w-xs'>Name</label>
                        <input className='input input-bordered w-full max-w-xs mt-3' type="text" name="user_name" />
                        <label className='form-control w-full max-w-xs'>Email</label>
                        <input className='input input-bordered w-full max-w-xs mt-3' type="email" name="user_email" />
                        <label className='form-control w-full max-w-xs mt-3'>Message</label>

                        <textarea className="textarea textarea-secondary w-full mt-3"></textarea>
                        <input className='btn btn-accent w-full mt-3' type="submit" value="Send Email" />

                    </form>
                </div>
           

        </div>
    );
};

export default Contact;