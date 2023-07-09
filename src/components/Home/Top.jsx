import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import work from '../../assets/undraw_work_time_re_hdyv (1)white.svg';
import Count from './Count';
import { motion } from 'framer-motion';

const section = [
        {name:"profile" , href:"#profile"},
        {name:"languages" , href:"#languages"},
        {name:"projects" , href:"#projects"},
        {name:"thoughts" , href:"#thoughts" }
];

const languages = [
        {name:"HTML" , value:69},
        {name:"CSS" , value:80},
        {name:"JAVASCRIPT" , value:70}
];

const topVariant = {
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                type:"tween",
                duration:1
            }
        }
};

const Top = () => {
  return (
    <div className='relative isolation overflow-hidden py-24 sm:py-32 w-full bg-gradient-to-br from-blue-400 via-sky-500 to-sky-400 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800'>
        <div
            className='max-w-[40%] absolute top-10 right-10 lg:right-32 md:max-w-[40%] lg:max-w-[40%] w-full h-full'
        >
            <LazyLoadImage
                className='w-full h-full'
                effect='blur'
                src={`${work}`}
                draggable={false}
            />
        </div>
        <motion.div 
            className='max-w-7xl px-6 lg:px-8 mt-20 sm:ml-10'
            initial="hidden"
            animate="visible"
            variants={topVariant}
        >
                <div className='mx-auto max-w-2xl lg:mx-0'>
                        <h2 className='text-slate-100 sm:text-6xl text-4xl font-bold tracking-tight dark:text-white'>
                                Hi , I am Paul
                        </h2>
                        <p
                            className='mt-6 text-2xl leading-9 text-gray-100 font-medium py-4 dark:text-white'
                        >
                            A self-taught React developer , HTML , CSS and Javascript are the core languages on my own
                        </p>
                </div>
                <div className='mx-auto max-w-2xl lg:mx-0 mt-10'>
                        <div
                            className='grid grid-cols-1 gap-x-8 gay-y-6 text-base font-semibold leading-9 text-slate-100 dark:text-white sm:grid-cols-2 md:flex lg:gap-x-10 capitalize cursor-pointer'
                        >
                            {
                                section.map((item) => (
                                        <motion.a 
                                          href={item.href} 
                                          key={item.name}
                                          whileTap={{scale:0.80}}
                                          className=' ml-5 sm:ml-0'
                                        >
                                                {item.name} <span>&rarr;</span>
                                        </motion.a>
                                ))
                            }
                        </div>
                </div>
                <div className='mx-auto max-w-2xl lg:mx-0 mt-16'>
                         <dl
                            className='grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'
                         >
                            {
                                languages.map((item) => (
                                    <div className='flex gap-5' key={item.name}>
                                            <dt className='leading-8 text-base font-medium text-gray-100 dark:text-white'>{item.name}</dt>
                                            <dd className='text-2xl font-bold tracking-tight text-gray-100 dark:text-white'>
                                                    <Count value={item.value}/>
                                            </dd>
                                    </div>
                                ))
                            }
                         </dl>
                </div>
        </motion.div>
    </div>
  )
}

export default Top