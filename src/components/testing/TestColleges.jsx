import React, { useEffect, useState } from 'react'
import Arrow from '../../assets/arrow.png'

export default function TestColleges({ props, expand }) {
  const { id, CODE, COLLEGE_NAME, BRANCH_LIST, OPEN, ALL_INDIA } = props;
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  return (
    <div className="relative flex flex-col m-6 bg-gray-100 hover:bg-gray-300 font-medium text-sm rounded-lg">
      <div className="p-6">
        <div className='flex justify-between'>
          <h5 className="block mb-2 font-sans text-xl antialiased font-bold text-blue-900">
            {id}. {COLLEGE_NAME}
          </h5>
          <button type="button" className='hover:bg-slate-500 rounded-full size-10 p-2' onClick={() => setExpanded(!expanded)}>
            <img src={Arrow} alt="▼" className='' />
          </button>
        </div>
        {expanded &&
          <div className='flex justify-between pt-6'>
            <div>
              <p className="block leading-relaxed text-inherit">
                Institute Code: {CODE}
              </p>
              <p className="block leading-relaxed text-inherit">
                Branch: {BRANCH_LIST}
              </p>
            </div>
            <div className='flex flex-col justify-evenly'>
              <p className="block leading-relaxed text-inherit">
                Open: {OPEN}
              </p>
              <p className="block leading-relaxed text-inherit">
                AIR: {ALL_INDIA}
              </p>
            </div>
          </div>}
      </div>
    </div>

  )
}

