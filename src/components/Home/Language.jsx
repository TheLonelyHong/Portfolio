import React from 'react';
import HTML from '../../assets/html.png';
import CSS from '../../assets/cssPic.png';
import JS from '../../assets/javascript.png';
import reactLogo from '../../assets/react.png';
import BOOTSTRAP from '../../assets/bootstrap.png';
import MUI from '../../assets/mui.png';
import FIREBASE from '../../assets/firebase.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

//https://tailwindui.com/img/logos/mark.svg?color=sky&shade=600

const frontend = [
      {name:"HTML" , image:`${HTML}`},
      {name:"CSS" , image:`${CSS}`},
      {name:"JS" , image:`${JS}`},
      {name:"REACT" , image:`${reactLogo}`},
      {name:"BOOTSTRAP" , image:`${BOOTSTRAP}`},
      {name:"MUI" , image:`${MUI}`},
      {name:"TAILWIND" , image:"https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"}
];

const backend = [
      {name:"Firebase" , image:`${FIREBASE}`}
];

const languageVariant = {
        hidden:{
            opacity:0,
            x:-100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                type:"tween",
                duration:2
            }
        }
};

const Language = () => {
  return (
    <motion.div
      className='relative isolation overflow-hidden bg-slate-50 z-0 dark:bg-slate-900'
      id='languages'
      initial="hidden"
      whileInView="visible"
      viewport={{amount:0 , once:true}}
    >
        <div className='absolute transform-gpu blur-3xl bottom-0 right-0 -z-10'>
              <div
                  className='hidden lg:block aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ecfeff] to-[#22d3ee] dark:from-[#27272a] dark:to-[#52525b] opacity-20'
                  style={{
                      clipPath:`
                          circle(30.1% at 52% 54%)
                      `
                  }}
              />
        </div>
          <CodeBracketIcon
              className='absolute top-0 left-5 max-w-sm -z-10 text-slate-400 dark:text-slate-800 opacity-20 -rotate-3'
          />
          <motion.div 
            className='px-2 py-20 lg:py-32 lg:px-5'
            variants={languageVariant}
          >
                <h1 className='text-slate-900 dark:text-slate-50 text-2xl lg:text-4xl font-semibold tracking-tight leading-6 text-center max-w-lg mx-auto lg:max-w-xl'>
                    Skills-sets
                </h1>
                <div className='mt-6 max-w-3xl lg:max-w-6xl py-4 px-4 lg:py-6 lg:px-6 mx-auto'>
                      <h1 className='text-slate-800 dark:text-slate-50 text-xl lg:text-2xl font-medium tracking-tight leading-9 text-left max-w-lg lg:max-w-xl italic underline'>
                          Frontend skills
                      </h1>
                      <ul className='flex gap-x-3 gap-y-3 flex-wrap justify-center md:justify-start py-8'>
                            {
                              frontend.map((item) => (
                                  <motion.li key={item.name} 
                                      className='w-20 h-20 rounded-md shadow-lg md:w-40 md:h-40'
                                      whileHover={{scale:1.3}}
                                      whileTap={{scale:0.8}}
                                  >
                                    <div className='flex justify-center'>
                                      <LazyLoadImage
                                        effect='blur'
                                        src={`${item.image}`}
                                        className='w-14 h-14 md:w-28 md:h-28 rounded-full object-cover'
                                        draggable={false}
                                      />
                                    </div>
                                      <h2 className='text-slate-700 dark:text-slate-100 text-sm font-light md:font-normal tracking-tight truncate text-center mt-1'>
                                          {item.name}
                                      </h2>
                                  </motion.li>
                              ))
                            }
                      </ul>
                </div>
                <div className='mt-6 max-w-3xl lg:max-w-6xl py-4 px-4 lg:py-6 lg:px-6 mx-auto'>
                      <h1 className='text-slate-800 dark:text-slate-100 text-xl lg:text-2xl font-medium tracking-tight leading-9 text-left max-w-lg lg:max-w-xl italic underline'>
                        Backend skills
                      </h1>
                      <ul className='flex gap-x-3 gap-y-3 flex-wrap justify-center md:justify-start py-8'>
                            {
                              backend.map((item) => (
                                  <motion.li
                                    key={item.name}
                                    className='w-20 h-20 rounded-md shadow-lg md:w-40 md:h-40'
                                    whileHover={{scale:1.3}}
                                    whileTap={{scale:0.8}}
                                  >
                                    <div className='flex justify-center'>
                                        <LazyLoadImage
                                            effect='blur'
                                            src={`${item.image}`}
                                            className='w-14 h-14 md:w-28 md:h-28 rounded-full'
                                            draggable={false}
                                        />
                                    </div>
                                    <h2 className='text-slate-700 dark:text-slate-100 text-sm font-light md:font-normal tracking-tight truncate text-center mt-1'>
                                        {item.name}
                                    </h2>
                                  </motion.li>
                              ))
                            }
                      </ul>
                </div>
          </motion.div>
    </motion.div>
  )
}

export default Language