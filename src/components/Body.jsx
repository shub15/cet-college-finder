import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import CutoffChart from './CutoffChart';
import { Link } from 'react-router-dom';
import DarkModeContext from './DarkModeContext';

export default function Body() {
  const { notifications } = useContext(NotificationContext);
  const { dark } = useContext(DarkModeContext);

  return (
    <div className={`container min-h-screen ${dark ? "bg-slate-950 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className={`p-5 sm:p-10 text-center ${dark ? "" : "bg-blue-950"} text-white`}>
        <p className='m-5 sm:m-10 sm:text-5xl text-2xl font-bold'>
          Find the Best College for You!
        </p>
        <div>
          <Link to="/colleges">
            <button className={`px-6 py-4 text-center text-lg font-semibold ${dark ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-900 hover:bg-blue-800"} rounded-lg`}>
              Search Colleges
            </button>
          </Link>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>

        {/* Display notifications */}
        <div className={`shadow-md rounded-lg border-l-4 ${dark ? "border-blue-500 bg-slate-800 text-blue-300" : "border-blue-500 bg-blue-100 text-blue-700"} p-6 mb-8`} role="alert">
          <h2 className="text-2xl font-bold mb-2">Important Notifications</h2>
          {notifications.length === 0 ? (
            <p className="text-gray-600">No new notifications.</p>
          ) : (
            <ol className={`list-decimal ml-6 ${dark ? "text-blue-200" : "text-gray-700"}`}>
              {notifications.map((notification, index) => (
                <li key={index} className="mt-2">{notification.text}</li>
              ))}
            </ol>
          )}
        </div>

        {/* Other content of your landing page */}
        <p className={`mb-4 ${dark ? "text-gray-400" : "text-gray-600"}`}>Please visit the official CET and the respective College website for up-to-date notifications</p>
      </div>

      {/* Cutoff Chart */}
      <div className="p-8">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Rise of College Cutoffs Over the Years</h2>
          <CutoffChart />
        </section>

        {/* Other content of your landing page */}
        <p className={`${dark ? "text-gray-400" : "text-gray-600"}`}>This year's cutoff may vary</p>
      </div>
    </div>
  );
}
