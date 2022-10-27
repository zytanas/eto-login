import React from 'react'
import loginImg from "../assets/login.jpg"

export default function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>

            <div className='bg-gray-400 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-slate-500 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-200 py-2'>
                        <label>User Name:</label>
                        <input className='rounded-lg bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-700 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col text-gray-200 py-2'>
                        <label>Password:</label>
                        <input className='rounded-lg bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-700 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-300 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p>Forgot Password?</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-600/50 hover:shadow-teal-800/40 text-white font-semibold rounded-lg'>Sign In</button>

                </form>
            </div>


        </div>
    )
}
