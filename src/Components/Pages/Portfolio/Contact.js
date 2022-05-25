import React from 'react';

const Contact = () => {
    return (
        <div className='my-3'>
            <div className="my-2">
                <h3>Connect With Me:</h3>
            </div>
            <div className="options flex ">
                <a className='mx-3' href="https://www.facebook.com/sabbir.mahmud.zim/">
                    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="" />
                </a>
                <a className='mx-3' href="https://m.me/sabbir.mahmud.zim/">
                    <img src="https://img.shields.io/badge/Messenger-00B2FF?style=for-the-badge&logo=messenger&logoColor=white" alt="" />
                </a>
                <a className='mx-3' href="https://github.com/sabbir-mahmud">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" />
                </a>
            </div>

        </div>
    );
};

export default Contact;