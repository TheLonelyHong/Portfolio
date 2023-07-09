import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import paul from '../../assets/Paul.png';

const info = [
        {name:"Age" , value:24},
        {name:"Birth" , value:"24/5/1999"},
        {name:"Phone" , value:"(+60)012-2677213"}
];

const IBM = [
        {name:"Weight" , value:"78kg"},
        {name:"Height" , value:"175+ cm"}
];

const work = [
        { 
            name:"Cashier" , 
            company:"Amazon Internet Cafe" , 
            period:"01/01/2020 ~ 01/08/2020" , 
            salary:"RM1300/mo",
            scope:[
                "Operate home computer",
                "Serve customer",
                "Keep good hygiene of enviroment",
                "Calculate total collected money"
            ],
            location:"IOI Puchong",
            backrupcy:"Already bankrupt due to MCO",
            image:"https://puchong.co/uploads/default/original/2X/1/1c18a73bc13fa96a41dc04f6d31a119f08a3dda9.jpeg"
        },
        {
            name:"Storekeeper",
            company:"Hingan Auto Parts Sdn Bhd",
            period:"01/01/2021 ~ 01/01/2022",
            salary:"RM1300/mo",
            scope:[
                "Pick automotive goods",
                "Pack collected goods",
                "Write bills for any collected goods",
                "Prepare shipment to client",
                "Unload truck container"
            ],
            location:"Pudu area nearby LRT",
            backrupcy:"Still operate",
            image:"https://www.carkaki.my/wp-content/uploads/job-manager-uploads/featured_image/2017/06/Hingan-Auto.jpg"
        },
        {
            name:"ATEN IT Support",
            company:"Silicon Electronics Sdn Bhd",
            period:"02/01/2022 ~ 02/02/2023",
            salary:"RM2000/mo",
            scope:[
                "Diagnosing ATEN hardware product",
                "Design solution with ATEN hardware",
                "Test solution with ATEN hardware",
                "Give support through phone to client",
                "Serve client's warranty products"
            ],
            location:"Imbi Plaza nearby Monorel",
            backrupcy:"Still operate",
            image:"https://www.silicon-e.com.my/images/ab0.png"
        }
];


const Profile = () => {
  return (
    <div
        className='relative isolation overflow-hidden bg-white dark:bg-slate-900 z-0'
        id="profile"
    >
        <QuestionMarkCircleIcon
            className=' max-w-sm lg:max-w-xl absolute -z-10 top-0 left-0 text-slate-400 dark:text-slate-800 opacity-20 -rotate-45'
        />
        <QuestionMarkCircleIcon
            className=' max-w-sm lg:max-w-xl absolute -z-10 bottom-0 right-0 text-slate-400 dark:text-slate-800 opacity-20 rotate-45'
        />
        <div className='px-8 py-24 lg:px-10 lg:py-28'>
            <h1 className='text-6xl text-center text-slate-900 dark:text-slate-50 max-w-xl lg:max-w-2xl mx-auto font-medium'>Profile</h1>
            <div className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:block sm:transform-gpu sm:blur-3xl'>
                    <div
                        className='aspect-[1097/845] w-[68.5624rem] bg-gradient-to-tr from-[#ecfeff] to-[#22d3ee] dark:from-[#27272a] dark:to-[#52525b] opacity-20'
                        style={{
                            clipPath:`
                                polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)  
                            `
                        }}
                    />
            </div>
            <div className='max-w-4xl mx-auto sm:max-w-5xl md:max-w-7xl sm:px-4 sm:py-8 mt-6 lg:mt-2'>
                    <div className='flex flex-col-reverse md:flex-row'>
                            <div className='basis-1/2 px-8'>
                                    <h1 className='text-slate-900 dark:text-slate-50 text-lg sm:text-xl pb-5 font-semibold sm:pb-7'>Full Name 
                                      <span className='italic'>{"(NRIC.)"}:</span> 
                                      <span className='italic text-slate-800 dark:text-slate-100 text-2xl lg:text-4xl font-medium ml-2'>Ang Chee Hong</span>
                                    </h1>
                                    <dl className='flex gap-x-3 gap-y-2 flex-col lg:flex-row pb-7'>
                                            {
                                                info.map((item) => (
                                                    <div className='flex items-center' key={item.name}>
                                                        <dt className='text-slate-900 dark:text-slate-50 text-base font-semibold'>{item.name}:</dt>
                                                        <dd className='text-slate-800 dark:text-slate-100 text-base lg:text-lg font-medium ml-2'>{item.value}</dd>
                                                    </div>
                                                ))
                                            }
                                    </dl>
                                    <h1 className='text-slate-900 dark:text-slate-50 text-lg sm:text-xl pb-5 font-semibold sm:pb-7'>Nationality:
                                            <span className='italic text-slate-800 dark:text-slate-100 text-xl lg:text-2xl font-medium ml-2'>Malaysian</span>
                                    </h1>
                                    <dl className='flex gap-x-3 gap-y-2 flex-col lg:flex-row pb-7'>
                                            {
                                                IBM.map((item) => (
                                                    <div className='flex items-center' key={item.name}>
                                                        <dt className='text-slate-900 dark:text-slate-50 text-base font-semibold'>{item.name}:</dt>
                                                        <dd className='text-slate-800 dark:text-slate-100 text-base lg:text-lg font-medium ml-2'>{item.value}</dd>
                                                    </div>
                                                ))
                                            }
                                    </dl>
                                    <h1 className='text-slate-900 dark:text-slate-50 text-lg sm:text-xl pb-5 font-semibold sm:pb-7'>Currently located:<br/>
                                            <span className='italic text-slate-800 dark:text-slate-100 text-xl lg:text-2xl font-medium'>
                                                NO.23 , JALAN BK 4/1L BANDAR KINRARA 4 47180 PUCHONG SELANGOR
                                            </span>
                                    </h1>
                            </div>
                            <div className='basis-1/2 flex justify-center'>
                                    <LazyLoadImage
                                        effect='blur'
                                        className=' h-72 w-72 rounded-md m-auto object-cover shadow-lg'
                                        src={`${paul}`}
                                        draggable={false}
                                    />
                            </div>
                    </div>
                    <h1 className='text-slate-900 dark:text-slate-50 text-xl text-center font-medium underline'>Work experience</h1>
                    <div className='flex flex-col items-center flex-wrap justify-center md:justify-start md:flex-row gap-x-1 gap-y-5 mt-5'>
                                  {
                                    work.map((item) => (
                                            <div 
                                               key={item.name}
                                               className=' w-80 md:w-96 shadow-lg rounded-md mx-auto  px-2'
                                            >
                                                <div className='w-full h-56 flex justify-center px-1 py-1'>
                                                    <LazyLoadImage
                                                        className='w-full h-52'
                                                        effect='blur'
                                                        src={`${item.image}`}
                                                        draggable={false}
                                                    />
                                                </div>
                                                <h1 className=' text-lg md:text-xl font-medium text-slate-900 dark:text-slate-50 px-2 pb-2 border-b-2 border-sky-400 mb-2 dark:border-sky-900'>{item.name}</h1>
                                                <p className=' text-base md:text-lg font-medium text-slate-900 dark:text-slate-50 px-2 pb-2'>
                                                    Salary:<span className='font-semibold ml-1 italic'>{item.salary}</span>
                                                </p>
                                                <p className=' text-base md:text-lg font-medium text-slate-900 dark:text-slate-50 px-2 pb-2'>
                                                    Period:<span className='font-semibold ml-1 italic'>{item.period}</span>
                                                </p>
                                                <p className=' text-base md:text-lg font-medium text-slate-900 dark:text-slate-50 px-2 pb-2'>
                                                    Location:<span className='font-semibold ml-1'>{item.location}</span>
                                                </p>
                                                <p className=' text-base md:text-lg font-medium text-slate-900 dark:text-slate-50 px-2 pb-2'>
                                                    Status:<span className='font-semibold text-red-400 dark:text-red-700 ml-1'>{item.backrupcy}</span>
                                                </p>
                                                <h2 className='text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-50 px-2 pb-2'>Job scope:</h2>
                                                <div className='pb-2'>
                                                    <ul className=' list-inside list-disc marker:text-sky-500 dark:marker:text-blue-600 ml-3 dark:text-slate-50'>
                                                        {item.scope.map((item) => (
                                                                <li key={item}>
                                                                    {item}
                                                                </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                    ))
                                  }          
                    </div>
            </div>
            <div className='absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl'>
                    <div
                        className='aspect-[1155/678] w-[36.1245rem] -translate-x-1/2 bg-gradient-to-tr from-[#ecfeff] to-[#22d3ee] dark:from-[#27272a] dark:to-[#52525b] opacity-30'
                        style={{
                            clipPath:`
                                polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)  
                            `
                        }}
                    />
            </div>
        </div>
    </div>
  )
}

export default Profile