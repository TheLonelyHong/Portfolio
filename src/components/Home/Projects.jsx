import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import nintendo from '../../assets/nintendo.png';
import tour from '../../assets/tour.png';
import social from '../../assets/social.png';
import { motion } from 'framer-motion';

const projectVariant = {
            hidden:{
                    opacity:0,
                    y:-100
            },
            visible:{
                    opacity:1,
                    y:0,
                    transition:{
                        type:"tween",
                        duration:2
                    }
            }
};

const project = [
        {
            name:"E commerce website",
            makeBy:"Firebase",
            library:[
                "Framer-motion",
                "Bootstrap",
                "Material MUI",
                "Firebase",
                "React-Redux",
                "React-router-dom@6.3.0"
            ],
            image:`${nintendo}`,
            remark:"Under development",
            href:"https://magnificent-medovik-864ae1.netlify.app/"
        },
        {
            name:"Social media website",
            makeBy:"Firebase",
            library:[
                "Bootstrap",
                "MUI Material Icons",
                "Firebase",
                "React-redux",
                "React-router-dom@6.3.0"
            ],
            image:`${social}`,
            remark:"Under development",
            href:"https://ornate-entremet-5eb132.netlify.app/"
        },
        {
            name:"Tour app",
            makeBy:"NodeJS",
            library:[
                "NodeJS",
                "ExpressJS",
                "PassportJS",
                "Mongoose",
                "React-redux",
                "React-router-dom@6.3.0",
                "React-map-gl"
            ],
            image:`${tour}`,
            remark:"Under development",
            href:"https://reliable-jalebi-f4b710.netlify.app/"
        }
];

//https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80

const Projects = () => {
  return (
    <div 
        id="projects"
    >
            <div className='relative isolate z-0 bg-gray-900 min-h-[80vh] py-14 overflow-hidden'>
                    <LazyLoadImage
                        alt=''
                        src='https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80'
                        className='absolute inset-0 -z-10 h-full w-full object-cover opacity-20'
                        draggable={false}
                    />
                    <div className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:block sm:transform-gpu sm:blur-3xl'>
                            <div
                                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                                style={{
                                    clipPath:`
                                    polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)    
                                    `
                                }}
                            />
                    </div>
                    <div className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'>
                             <div
                                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                                style={{
                                    clipPath:`
                                    polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)  
                                    `
                                }}
                             />
                    </div>
                    <div
                        className='max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl my-10 mx-auto'
                    >
                        <h1 className='text-slate-50 text-2xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center underline'>Self-projects</h1>
                        <motion.div
                            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 mt-8 px-6 sm:px-0'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount:0 , once:true}}
                        >
                            {
                                project.map((item) => (
                                        <motion.div 
                                            key={item.name}
                                            className='rounded-md shadow-lg bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50'
                                            variants={projectVariant}
                                        >
                                            <LazyLoadImage
                                                src={`${item.image}`}
                                                effect='blur'
                                                className='w-full h-60 rounded-md object-cover'
                                            />
                                            <div
                                                className='py-3 px-3'
                                            >
                                                <h1 className='text-xl lg:text-2xl font-semibold underline'>{item.name}</h1>
                                                <hr className='mt-3 mb-3'/>
                                                <h1 className='text-base lg:text-xl font-medium text-slate-800 dark:text-slate-50'>
                                                        MakeBy : <span className='text-2xl font-normal italic text-slate-700 dark:text-slate-100'>{item.makeBy}</span>
                                                </h1>
                                                <h1 className='text-base lg:text-xl font-medium text-slate-800 dark:text-slate-50'>Library used:</h1>
                                                <ul className='list-disc list-inside marker:text-slate-900 dark:marker:text-slate-100 ml-2'>
                                                        {
                                                            item.library.map((item) => (
                                                                <li key={item} className=' font-light'>
                                                                    {item}
                                                                </li>
                                                            ))
                                                        }
                                                </ul>
                                                <h1 className='text-base lg:text-xl font-medium text-slate-800 dark:text-slate-50 mt-3'>
                                                        Remark: <span className='text-2xl font-normal italic text-slate-700 dark:text-slate-100'>{item.remark}</span>
                                                </h1>
                                            </div>
                                            <div className='py-8 px-4'>
                                            <a 
                                                href={`${item.href}`}
                                                className=' px-32 py-3 bg-red-500 dark:bg-blue-500 text-slate-100 rounded-lg dark:hover:bg-blue-600 hover:bg-red-600 hover:text-slate-50 focus:outline-none focus-ring-offset-2 focus:ring-4 dark:focus:ring-blue-600 focus:ring-red-600 focus:bg-white focus:text-red-600 dark:focus:text-white font-medium'
                                            >
                                                Visit
                                            </a>
                                            </div>
                                        </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
            </div>
    </div>
  )
}

export default Projects