import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader } from '../../utils/tools';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Contact = () => {

    const formRef = useRef();
    const [[message , instant , load , times] , setLoad] = useState([""  , "text-slate-900 dark:text-slate-50" , false , 1]);
    const [loading , setLoading] = useState(false);

    const sendEmail = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            const {email , message , name , number , phone} = formProps
            setLoading(false);
            setLoad(["" , "" , false , 1]);
            if(!email){
                    setLoad(["Email cannot be blank" , "text-red-600" , true , 1]);
                    return;
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
                    setLoad(["Invalid email address" , "text-red-600 dark:text-red-400" , true , 1]);
                    return;
            }else if(!message){
                    setLoad(["Please leave down some message and I will contact you soon" , "text-red-600 dark:text-red-400" , true , 1]);
                    return;
            }else if(!name){
                    setLoad(["Please leave down your name" , "text-red-600 dark:text-red-400" , true , 1]);
                    return;
            }else if(!number){
                    setLoad(["Please leave down your number" , "text-red-600 dark:text-red-400" , true , 1]);
                    return;
            }else if(!phone){
                    setLoad(["Please choose which contact code you are from " , "text-red-600 dark:text-red-400" , true , 1]);
                    return;
            }

            setLoad(["You are sending a message to Paul" , "text-indigo-600 dark:text-indigo-400" , true , 1]);
            setLoading(true);

            emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID , import.meta.env.VITE_EMAIL_TEMPLATE_ID  , formRef.current , import.meta.env.VITE_EMAIL_PUBLIC_KEY)
                .then(() => {
                        setLoad(["Succesfully sent message to Paul" , "text-green-600 dark:text-green-400" , true , 2]);
                        setLoading(false);
                })
                .catch((con) => {
                        console.log(con);
                })
    };

  return (
    <div className='min-h-[100vh] bg-white dark:bg-slate-900'>
        <form 
           onSubmit={sendEmail} 
           ref={formRef}
           className='max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto pt-6'
        >
                <div className='px-10 py-10'>
                        <div>
                            <label className='text-lg lg:text-2xl font-medium text-slate-900 dark:text-slate-50'>Name:</label>
                            <input 
                                type='text' 
                                placeholder='Full name...' 
                                className='w-full p-4 border-b-2 border-l-2 border-t-2 border-r-2 border-indigo-600 text-gray-900 dark:text-gray-50 text-sm placeholder:text-slate-400 
                                           mt-3 placeholder:text-lg border-l-gray-200 border-r-gray-200 border-t-gray-200 rounded-md dark:border-gray-50 lg:text-lg
                                           dark:border-l-gray-700 dark:border-r-gray-700 dark:border-t-gray-700 dark:bg-gray-700 dark:placeholder:text-slate-50'
                                name='name'
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='text-lg lg:text-2xl font-medium text-slate-900 dark:text-slate-50'>Email:</label>
                            <input 
                                type='text' 
                                placeholder='Email...' 
                                className='w-full p-4 border-b-2 border-l-2 border-t-2 border-r-2 border-indigo-600 text-gray-900 text-sm placeholder:text-slate-400 
                                           mt-3 placeholder:text-lg border-l-gray-200 border-r-gray-200 border-t-gray-200 rounded-md dark:border-gray-50
                                           dark:border-l-gray-700 dark:border-r-gray-700 dark:border-t-gray-700 dark:text-gray-50 dark:bg-gray-700
                                           dark:placeholder:text-slate-50 lg:text-lg'
                                name='email'
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='text-lg lg:text-2xl font-medium text-slate-900 dark:text-slate-50'>Message:</label>
                            <textarea 
                                className='w-full h-32 resize-none p-2.5 border-b-2 border-l-2 border-t-2 border-r-2 border-l-gray-200 border-r-gray-200 border-t-gray-200
                                         border-indigo-600 text-gray-900 text-sm placeholder:text-slate-400 placeholder:text-lg rounded-md mt-3 dark:border-gray-50
                                        dark:border-l-gray-700 dark:border-r-gray-700 dark:border-t-gray-700 dark:text-gray-50 dark:bg-gray-700 dark:placeholder:text-slate-50
                                        lg:text-lg'
                                placeholder='Message...'
                                name='message'
                            />
                        </div>
                        <div className='flex max-w-sm mt-6'>
                                <select 
                                    className='border border-indigo-600 text-gray-900 text-sm rounded-l-lg
                                                border-r-indigo-600 focus:ring-blue-500
                                                focus:border-blue-500 block w-24 lg:w-32 p-2.5 dark:bg-gray-700 dark:border-gray-100
                                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-900
                                                dark:focus:border-slate-900 lg:text-lg'
                                    name='phone'
                                >
                                    <option value="">Phone</option>
                                    <option value="+84">+84 Vietnam</option>
                                    <option value="+66">+66 Thailand</option>
                                    <option value="+65">+65 Singapore</option>
                                    <option value="+852">+852 Hong Kong</option>
                                    <option value="+60">+60 Malaysia</option>
                                </select>
                                <input type='text' 
                                    className='p-2.5 border-b-2 border-indigo-600 text-gray-900 dark:text-gray-50 text-sm placeholder:text-sm placeholder:italic 
                                                placeholder:text-slate-400 w-48 dark:border-gray-100 dark:bg-gray-700 dark:placeholder:text-slate-100 lg:text-lg' 
                                    placeholder='123-123-123'
                                    name="number"
                                />
                        </div>
                        <div className='mt-5 flex items-center gap-x-3'>
                            <button 
                              type='submit'
                              className='py-3 px-10 bg-indigo-500 text-white rounded-md text-base focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-600 
                                         focus:bg-white focus:text-indigo-600 dark:bg-blue-500 dark:text-slate-50 dark:focus:ring-blue-600 dark:focus:text-blue-600
                                         dark:focus:bg-slate-200 dark:focus:ring-2 dark:focus:ring-offset-2 hover:bg-indigo-800 dark:hover:bg-blue-800 flex items-center gap-x-3
                                         disabled:opacity-25 disabled:cursor-not-allowed'
                              disabled={times === 2 ? true : false}
                            >
                                Send
                                <PaperAirplaneIcon
                                    className='h-5 w-5'
                                />
                            </button>
                            {
                                loading ? 
                                    <Loader/>
                                :
                                    null
                            }
                        </div>
                        {
                            load ? 
                                <div className='mt-5'>
                                        <p className={`text-base lg:text-xl ${instant}`}>{message}</p>
                                </div>
                            : null
                        }
                </div>
        </form>
    </div>
  )
}

export default Contact