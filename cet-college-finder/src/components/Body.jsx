import React from 'react'
import Form from './Form'

export default function Body() {
  return (
    <div className='bg-blue-500'>
      <div className='p-10 text-center bg-blue-950 '>
        <p className='m-10 text-5xl font-bold text-white'>
          This website can help to find best college
        </p>
      </div>
      <div className=''>
        <Form />
      </div>
    </div>

  )
}
