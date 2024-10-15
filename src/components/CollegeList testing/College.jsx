import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import toTitleCase from '../CaseConverter'

export default function College({ id, college }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return (
        <>
            <tr
                ref={setNodeRef} {...attributes}
                key={college.id}
                style={style}
                className=" hover:bg-gray-300 hover:cursor-text font-medium text-sm"
            >
                <td
                    {...listeners}
                    className="py-5 hover:cursor-move" align="center" valign="middle">
                    {college.id+"."}
                </td>
                <td className="Item" align="center" valign="middle">
                    {college.CODE}
                </td>
                <td className="Item px-5" align="left" valign="middle">
                    {college.COLLEGE_NAME}
                </td>
                <td className="Item" align="left" valign="middle">
                    {toTitleCase(college.BRANCH_LIST)}
                </td>
                <td className="pl-5" align="left" valign="middle">
                    {college.OPEN}
                </td>
                {/* <td className="Item" align="center" valign="middle">
                {college.TFWS}
                </td>
                 <td className="Item" align="center" valign="middle">
                {college.EWS}
                </td> */}
                <td className="px-5" align="center" valign="middle">
                    {college.ALL_INDIA}
                </td>
            </tr>
        </>
    )
}
