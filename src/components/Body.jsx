import React, { useContext } from 'react'
import { NotificationContext } from './NotificationContext';
import CutoffChart from './CutoffChart';
import { Link } from 'react-router-dom';

export default function Body() {
  const { notifications } = useContext(NotificationContext);
  return (
    <div className='container min-h-screen'>
      <div className='p-5 sm:p-10 text-center bg-blue-950'>
        <p className='m-5 sm:m-10 sm:text-5xl text-2xl font-bold text-white'>
          This website can help to find best college
        </p>
        <div>
          <Link to="/colleges">
            <button className='px-6 py-4 text-center text-white font-semibold bg-blue-900 rounded-lg'>Search Colleges</button>
          </Link>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>

        {/* Display notifications */}
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6" role="alert">
          <h2 className="text-2xl font-bold">Important Notifications</h2>
          {notifications.length === 0 ? (
            <p>No new notifications.</p>
          ) : (
            <ul className="list-disc ml-6">
              {notifications.map((notification, index) => (
                <li key={index} className="mt-2">{notification}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Other content of your landing page */}
        <p>Please visit the official CET and the respective College website for update-to-date notifications</p>
      </div>

      <div className="p-8">
        {/* Cutoff Chart */}
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
