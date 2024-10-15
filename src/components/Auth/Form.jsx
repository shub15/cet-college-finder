import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || '';

const input = {
  text: "p-1 accent-slate-800 text-black  rounded",
  radio: "p-1 accent-slate-800 text-black  rounded"
}

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [reservation, setReservation] = useState(false);
  const [percentile, setPercentile] = useState(100);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${API_URL}/api/user/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password, location, reservation, percentile: Number(percentile) }),
      });
      setSuccess(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-xl mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Sign Up</h2>
          <p className="text-gray-500 mb-6">
            It will help us to find the best college for you.
          </p>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              {success && <p className='text-green-700 text-center mb-4'>Account created successfully!</p>}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 gap-y-5 text-lg grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Matunga"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="reservation">Reservation</label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <select
                          id="reservation"
                          name="reservation"
                          value={reservation ? "YES" : "NO"}
                          onChange={(e) => setReservation(e.target.value === "YES")}
                          className="h-10 rounded-md border-0 bg-gray-50 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset focus:ring-indigo-600 font-semibold sm:text-sm"
                        >
                          <option value="NO">NO</option>
                          <option value="YES">YES</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="percentile">Percentile</label>
                      <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="percentile"
                          id="percentile"
                          placeholder={90}
                          value={percentile}
                          onChange={(e) => setPercentile(e.target.value)}
                          className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                        />
                        <label htmlFor="percentile" className='mr-5'>%</label>
                      </div>
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        required
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-lg mt-4">
                    <p>
                      Already have an account?{' '}
                      <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
