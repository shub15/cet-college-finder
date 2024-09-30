import React, { useContext } from 'react'
import { NotificationContext } from './NotificationContext';
import CutoffChart from './CutoffChart';
import { Link } from 'react-router-dom';

export default function Body() {
  const { notifications } = useContext(NotificationContext);
  return (
    <div className='container min-h-screen bg-gray-50'>
      <div className='p-5 sm:p-10 text-center bg-blue-950 text-white'>
        <p className='m-5 sm:m-10 sm:text-5xl text-2xl font-bold'>
          Find the Best College for You!
        </p>
        <div>
          <Link to="/colleges">
            <button className='px-6 py-4 text-center text-lg font-semibold bg-blue-900 hover:bg-blue-800 rounded-lg'>Search Colleges</button>
          </Link>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Our Platform</h1>

        {/* Display notifications */}
        <div className="bg-blue-100 shadow-md rounded-lg border-l-4 border-blue-500 text-blue-700 p-6 mb-8" role="alert">
          <h2 className="text-2xl font-bold mb-2">Important Notifications</h2>
          {notifications.length === 0 ? (
            <p className="text-gray-600">No new notifications.</p>
          ) : (
            <ol className="list-decimal ml-6 text-gray-700">
              {notifications.map((notification, index) => (
                <li key={index} className="mt-2">{notification}</li>
              ))}
            </ol>
          )}
        </div>

        {/* Other content of your landing page */}
        <p className='text-gray-600 mb-4'>Please visit the official CET and the respective College website for update-to-date notifications</p>
      </div>

      {/* Cutoff Chart */}
      <div className="p-8">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Rise of College Cutoffs Over the Years</h2>
          <CutoffChart />
        </section>

        {/* Other content of your landing page */}
        <p>This year cutoff may vary</p>
      </div>
    </div>

  )
}
