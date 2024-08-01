import React from 'react'

const input = {
  text: "p-1 accent-slate-800 text-black  rounded",
  radio: "p-1 accent-slate-800 text-black  rounded"
}

export default function Form() {
  return (
    <div className='p-10 m-10 text-white text-xl font-semibold '>
      {/* <div className='flex justify-evenly '>
        <label>
          Enter Name: <input type="text" className='accent-slate-800 text-black'/>
        </label>
      </div> */}
      <table class="table-auto border-separate border-spacing-5 bg-blue-800">
        <tbody>
          <tr>
            <td>Name:</td>
            <td><input type="text" className={input.text}/></td>
          </tr>
          <tr>
            <td>Rank:</td>
            <td><input type="number" className={input.text}/></td>
          </tr>
          <tr>
            <td>Resevation:</td>
            <td className='flex justify-evenly'>
              <label htmlFor="">
                <input type="radio" className={input.radio}/> Yes
              </label>
              <label htmlFor="">
                <input type="radio" className={input.radio}/> No
              </label>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
