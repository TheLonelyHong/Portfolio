import React, { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { MoonIcon , SunIcon } from '@heroicons/react/24/solid';
import Dialog from './Dialog';
import { NavLink } from 'react-router-dom';


//https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600

const navigation = [
        {name:"Home" , href:"/"},
        {name:"Contact" , href:"/contact"}
];

//h-8 w-auto

const Navbar = () => {

    const [open , setOpen] = useState(false);
    const [theme , setTheme] = useState("light");

    useEffect(() => {
            if(theme === "dark"){
                    document.documentElement.classList.add("dark");
            }else{
                    document.documentElement.classList.remove("dark");
            }
    } , [theme]);

  return (
    <div className='p-5 bg-slate-50 sm:px-5 sm:py-5 w-full sticky top-0 shadow-md z-50 dark:bg-slate-900'>
           <div className='flex justify-between sm:container mx-auto max-w-6xl'> 
                <div>
                    {
                        theme === "light" ? 
                            <button
                                type='button'
                                className='h-8 w-auto px-3 py-3 flex items-center bg-transparent text-indigo-600 border-none focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-600'
                                onClick={() => setTheme("dark")}
                            >
                                <MoonIcon
                                    className="h-5 w-5 lg:h-8 lg:w-8"
                                />
                            </button>
                        :
                            <button
                                type='button'
                                className='h-8 w-auto px-3 py-3 flex items-center bg-transparent text-slate-50 border-none focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-50'
                                onClick={() => setTheme("light")}
                            >
                                <SunIcon
                                    className='h-5 w-5 lg:h-8 lg:w-8'
                                />
                            </button> 
                    }   
                </div>
                <div className='hidden md:block sm:px-4'>
                        <ul className='flex gap-x-6 justify-center items-center font-semibold text-sm text-indigo-600 list-none dark:text-slate-50'>
                                {
                                    navigation.map((item) => (
                                            <li key={item.name} className='px-2 py-2'>
                                                    <NavLink 
                                                       to={item.href} 
                                                       className={({isActive}) => 
                                                           isActive ? 
                                                            "p-3 border-b-2 border-indigo-600 dark:border-slate-50" : 
                                                            "p-3 "
                                                       }
                                                    >
                                                            {item.name}
                                                    </NavLink>
                                            </li>
                                    ))
                                }
                        </ul>
                </div>
                <div className='block md:hidden sm:px-4'>
                    <div className='flex items-center h-8 md:h-0'>
                        <button
                            type='button'
                            className='text-indigo-600 dark:text-slate-50 cursor-pointer p-3 border-none bg-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-600 rounded-sm dark:focus:ring-slate-50'
                        >
                            <Bars3Icon
                                className='h-7 w-7'
                                onClick={() => setOpen(true)}
                            />
                        </button>
                    </div>
                </div>
                <Dialog open = {open} close = {() => setOpen(false)} navigation = {navigation}/> 
           </div>
    </div>
  )
}

export default Navbar