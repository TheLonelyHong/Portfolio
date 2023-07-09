import React from 'react';
import Type from './Type';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

const one = "I am a beginner of <span class = 'text-blue-600 italic font-semibold'>REACT</span> development so far<br/>";
const two = "But I would like to explore more about <span class = 'text-blue-600 italic font-semibold'>REACT</span><br/>";
const three = "Although I am not hundred percent master <span class = 'text-blue-600 italic font-semibold'>REACT</span> , but I will try my best";

const Thoughts = () => {
  return (
    <div 
      className='relative z-0 isolation py-16 sm:py-20 px-10 sm:px-16 bg-white dark:bg-slate-900'
      id='thoughts'  
    >
            <AcademicCapIcon
                className='text-slate-100 dark:text-slate-800 absolute -z-10 max-w-sm top-0 left-0 hidden lg:block'
            />
                <h1 className='text-2xl md:text-5xl text-semibold text-slate-900 dark:text-slate-50 text-center underline tracking-tight leading-9 pb-3'>My thoughts</h1>
                <div className='max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto rounded-lg shadow-lg px-3 py-3 sm:py-9 sm:px-9 text-slate-900 dark:text-slate-50 text-xl md:text-3xl font-normal'>
                        <Type
                            one={one}
                            two={two}
                            three={three}
                        />
            </div>
    </div>
  )
}

export default Thoughts