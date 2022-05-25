import React from 'react';

const Skills = () => {
    return (
        <div className='my-3'>
            <div className="mt-5">
                <h3>My Skills:</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="px-3">
                    <div className="client-side">
                        <div className="flex flex-col lg:flex-row my-2">
                            <img className='my-3 lg:my-1 mx-2' src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                            <img className='my-3 lg:my-1 mx-2' src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                        </div>
                    </div>
                    <div className="programming-language">
                        <div className="flex flex-col lg:flex-row my-2">
                            <img className='my-3 lg:my-1 mx-2' src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" />
                            <img className='my-3 lg:my-1 mx-2' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
                            <img className='my-3 lg:my-1 mx-2' src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="" />
                        </div>
                    </div>
                    <div className="client-side-framework">
                        <div className="flex flex-col lg:flex-row my-2">
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="" />
                        </div>
                    </div>
                    <div className="frameworks-library">
                        <div className="flex flex-col lg:flex-row my-2">
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="" />
                        </div>
                    </div>
                    <div className="library">
                        <div className="flex flex-col lg:flex-row my-2">
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="" />
                        </div>
                    </div>

                    <div className="database">
                        <div className="flex flex-col lg:flex-row my-2">
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="" />
                            <img className="my-3 lg:my-1 mx-2" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                        </div>
                    </div>
                </div>
                <div className="most-used-language lg:px-14">
                    <img className="my-3 lg:mx-2" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sabbir-mahmud&hide_border=true&theme=tokyonight" alt="" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <img className='w-full my-5' src="https://github-readme-stats.vercel.app/api?username=sabbir-mahmud&show_icons=true&hide_border=true&theme=tokyonight" alt="" />
                <img className='w-full my-5' src="https://github-readme-streak-stats.herokuapp.com/?user=sabbir-mahmud&theme=tokyonight" alt="" />
            </div>
        </div>


    );
};

export default Skills;