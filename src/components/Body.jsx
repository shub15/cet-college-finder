import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import { ThemeContext } from './ThemeContext';
import CutoffChart from './CutoffChart';
import { Link } from 'react-router-dom';

export default function Body() {
  const { notifications } = useContext(NotificationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text}`}>
      <div className={`p-5 sm:p-10 text-center ${theme.background == "bg-gray-50" ? "bg-blue-950 text-white": theme.background} ${theme.text}`}>
        <p className='m-5 sm:m-10 sm:text-5xl text-2xl font-bold'>
          Find the Best College for You!
        </p>
        <div>
          <Link to="/colleges">
            <button className={`px-6 py-4 text-center text-lg font-semibold ${theme.button} rounded-lg`}>
              Search Colleges
            </button>
          </Link>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>

        {/* Theme switcher */}
      <div className="mb-4">
        <label htmlFor="theme" className="mr-2">Switch Theme:</label>
        <select
          id="theme"
          onChange={(e) => toggleTheme(e.target.value)}  // Update theme when user selects an option
          defaultValue="defaultLight"
          className={`p-2 rounded ${theme.background} ${theme.text}`}  // Style based on theme
        >
          <option value="defaultLight">Default Light</option>
          <option value="defaultDark">Default Dark</option>
          <option value="solarizedLight">Solarized Light</option>
          <option value="solarizedDark">Solarized Dark</option>
          {/* Add more theme options here */}
        </select>
      </div>

        {/* Display notifications */}
        <div className={`shadow-md rounded-lg border-l-4 border-blue-500 ${theme.notification} p-6 mb-8`} role="alert">
          <h2 className="text-2xl font-bold mb-2">Important Notifications</h2>
          {notifications.length === 0 ? (
            <p className="text-gray-600">No new notifications.</p>
          ) : (
            <ol className={`list-decimal ml-6 ${theme.text}`}>
              {notifications.map((notification, index) => (
                <li key={index} className="mt-2">{notification.text}</li>
              ))}
            </ol>
          )}
        </div>

        <p className={`${theme.text}`}>Please visit the official CET and the respective College website for up-to-date notifications</p>
      </div>

      {/* Cutoff Chart */}
      <div className="p-8">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Rise of College Cutoffs Over the Years</h2>
          <CutoffChart />
        </section>

        <p className={`${theme.text}`}>This year's cutoff may vary</p>
      </div>
    </div>
  );
}
