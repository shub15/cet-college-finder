import React from 'react'
import TestColleges from './TestColleges'

export default function TestLoading() {
    return (
        <div className='container min-h-screen text-center text-3xl font-medium items-center pt-5'><TestColleges key={NaN} props={{ id: 1, COLLEGE_NAME: "Loading" }} /></div>
    )
}
