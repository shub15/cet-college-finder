import React, { useEffect, useState } from 'react'

export default function LoginPage() {

    return (
        <div>
            <div className='flex min-h-screen bg-blue-950 text-white p-5'>
                <div className='container bg-gradient-to-r from-[#00084d] to-[#1d63ed]  rounded-md'></div>
                <div className='self-center font-semibold text-2xl p-5 w-[100%]'>
                    <h1 className='text-center text-6xl'>Login</h1>
                    <form action="http://localhost:8080/auth" method="post" className='flex flex-col mt-[10%] self-center p-5 text-white'>
                        <div className=' rounded-lg p-16'>
                            <div className='flex flex-col pb-16 md:col-span-5'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className='mt-8 h-12 w-full px-4 border rounded bg-slate-300 text-black ring-blue-600' placeholder="email@domain.com" />
                            </div>
                            <div className='flex flex-col pb-16'>
                                <label htmlFor='password'>Password</label>
                                <input type="password" name="password" id='password' className='mt-8 h-12 w-full px-4 border rounded bg-slate-300 text-black ring-blue-600' />
                            </div>
                            <div className=''>
                                <input type="submit" value="Login" className='bg-blue-900 text-white rounded-md w-full py-4' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
