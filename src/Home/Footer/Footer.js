import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='pb-3'>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
               
                <IconContext.Provider value={{ color: '', size: 30 }}>
               
                    <div className="grid grid-flow-col gap-4">
                        <a value={{ color: 'navy', size: 30 }} href='https://github.com/Abrahon'><svg xmlns="" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><FaGithub ></FaGithub></svg></a>
                        <a href='https://www.linkedin.com/in/md-sujon-mia-2172a524b/'><svg xmlns="" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><FaLinkedin className=''></FaLinkedin></svg></a>
                        <a href='https://www.facebook.com/ABRAHON?mibextid=ZbWKwL'><svg xmlns="" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
               
                </IconContext.Provider>
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;