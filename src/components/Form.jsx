import React from 'react'

const input = {
  text: "p-1 accent-slate-800 text-black  rounded",
  radio: "p-1 accent-slate-800 text-black  rounded"
}

export default function Form() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-xl mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Sign Up</h2>
          <p className="text-gray-500 mb-6">
            It will help us to find best college for you.
          </p>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-5 text-lg grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="address">Location</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="Matunga"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Pincode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      defaultValue=""
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="" className="">
                      Reservation
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="inset-y-0 right-0 flex items-center">
                        <select
                          id="reservation"
                          name="reservation"
                          className="h-10 rounded-md border-0 bg-gray-50 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset focus:ring-indigo-600 font-semibold sm:text-sm"
                        >
                          <option>NO</option>
                          <option>YES</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="soda">Percentile</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="soda"
                        id="soda"
                        placeholder={90}
                        className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                        defaultValue=""
                      />
                      <label htmlFor="soda" className='mr-5'>%</label>
                    </div>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
