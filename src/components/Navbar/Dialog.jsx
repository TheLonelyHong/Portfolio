import React from 'react';
import { Dialog } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion , AnimatePresence } from 'framer-motion';

const dialogVariant = {
        hidden:{
                opacity:0,
        },
        visible:{
                opacity:1,
                transition:{
                        type:"tween",
                        duration:0.5
                }
        }
};

//https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600

const Dialogs = ({open , close , navigation}) => {
  return (
    <div className='hidden'>
        <AnimatePresence>
           {
                open && 
                     <Dialog 
                        open={open} 
                        onClose = {close}
                        static
                        as={motion.div}
                        initial="hidden"
                        animate="visible"
                        variants={dialogVariant}
                     >
                                <div className='fixed inset-0 z-50'>
                                <Dialog.Panel
                                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-50 dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-50"
                                >
                                        <div className='flex items-center justify-between'>
                                                <NavLink
                                                        to="/"
                                                        onClick={close}
                                                >
                                                        <LazyLoadImage
                                                                src='https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600'
                                                                className='h-8 w-auto'
                                                                effect='blur'
                                                        />
                                                </NavLink>
                                                <button
                                                        type='button'
                                                        className='text-slate-900 dark:text-slate-50 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-slate-50'
                                                        onClick={close}
                                                >
                                                        <XMarkIcon
                                                                className='h-6 w-6'
                                                        />
                                                </button>
                                        </div>
                                        <hr className='mt-3'/>
                                        <div>
                                                        <ul>
                                                                {navigation.map((item) => (
                                                                        <li
                                                                        key={item.name}
                                                                        className='space-y-2 py-6'
                                                                        >
                                                                        <NavLink
                                                                                to={item.href}
                                                                                className={({isActive}) =>
                                                                                        isActive ? 
                                                                                        "block px-3 pb-5 text-base font-semibold leading-7 text-indigo-600 dark:text-slate-50 hover:bg-gray-100 dark:hover:bg-gray-900 border-b-2 border-indigo-600 dark:border-slate-50"
                                                                                        :
                                                                                        "block px-3 pb-5 text-base font-semibold leading-7 text-indigo-600 dark:text-slate-50 hover:bg-gray-100 dark:hover:bg-gray-900"
                                                                                }
                                                                                onClick={close}
                                                                        >
                                                                                {item.name}
                                                                        </NavLink>
                                                                        </li>
                                                                ))}
                                                        </ul>
                                        </div>
                                </Dialog.Panel>
                                </div>
                        </Dialog>
           }
        </AnimatePresence>
    </div>
  )
}

export default Dialogs