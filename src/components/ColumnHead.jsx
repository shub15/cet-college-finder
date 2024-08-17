import React from 'react'

export default function ColumnHead() {
    return (
        <>
            <tr className='bg-slate-600 text-white'>
                <th
                    className="Header"
                    align="center"
                    valign="middle"
                    scope="col"
                    style={{ fontWeight: "bold", width: "5%" }}
                >
                    Sr. No.
                </th>
                <th
                    className="Header"
                    align="center"
                    valign="middle"
                    scope="col"
                    style={{ fontWeight: "bold", width: "5%" }}
                >
                    Institute Code
                </th>
                <th
                    className="Header"
                    align="center"
                    valign="middle"
                    scope="col"
                    style={{ fontWeight: "bold", width: "50%" }}
                >
                    Institute Name
                </th>
                <th
                    className="Header"
                    align="center"
                    valign="middle"
                    scope="col"
                    style={{ fontWeight: "bold", width: "20%" }}
                >
                    Branch
                </th>
                <th
                    className="Header"
                    align="center"
                    valign="middle"
                    scope="col"
                    style={{ fontWeight: "bold", width: "9%" }}
                >
                    CET Rank
                </th>
                <th
                    className="Header"
                    align="center"
                    valign="middle"
                    scope="col"
                    style={{ fontWeight: "bold", width: "5%" }}
                >
                    AIR
                </th>
            </tr>
        </>
    )
}
