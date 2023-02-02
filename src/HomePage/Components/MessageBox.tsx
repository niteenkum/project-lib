import React from 'react';
import { SiMessenger } from 'react-icons/si';
import { RxCrossCircled } from 'react-icons/rx';

export default function MessageBox() {
    const [showMessage, setShowMessage] = React.useState(true)
    return (
        <div>
            {
                showMessage
                    ?
                    <div className='fixed bottom-0 right-3 md:right-10  w-4/5 md:w-96 h-3/5 bg-white rounded-t-xl shadow-xl delay-75'>
                        <div
                            onClick={() => setShowMessage(false)}
                            className='h-7 w-7 absolute bg-white top-0 left-0 z-10 -mt-9 -ml-9 rounded-full cursor-pointer flex items-center justify-center'>
                            <RxCrossCircled className='text-slate-600 text-6xl hover:text-red-600' />
                        </div>
                        <div className='h-10 bg-blue-100'>
                        </div>
                        <div className='px-4 w-full flex flex-col'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-4 p-1 outline-none'
                            ></input>

                            <input
                                type='text'
                                placeholder='Address'
                                className='h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-4 p-1 outline-none'
                            ></input>

                            <input
                                type='text'
                                placeholder='Phone Number'
                                className='h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-4 p-1 outline-none'
                            ></input>

                            <input
                                type='text'
                                placeholder='Message'
                                className='h-12 border border-gray-200 drop-shadow-sm rounded-lg mt-4 p-1 outline-none'
                            ></input>

                            <button
                                className={
                                    `w-full md:w-80 h-14 border border-gray-200 
          drop-shadow-sm rounded-lg mt-10 mx-3 p-1 outline-none bg-[#68E4FF]
          text-white hover:scale-110 hover:shadow-2xl	delay-75 transition-all duration-300 ease-in-out
          `}>
                                Submit
                            </button>

                        </div>
                    </div>
                    :
                    <div
                        onClick={() => setShowMessage(true)}
                        className=" cursor-pointer fixed bottom-10 right-10 h-16 w-16 rounded-full bg-orange-500 flex justify-center items-center border border-gray-50 shadow-2xl">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-20"></span>
                        <SiMessenger
                            className="text-white text-9xl"
                        />
                    </div>

            }
        </div>
    )
}
