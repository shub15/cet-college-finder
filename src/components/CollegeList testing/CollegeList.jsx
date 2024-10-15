import React, { useEffect, useState } from 'react'
// import Colleges from './Colleges';
// import collegeList from '../json/colleges.json'
// import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import ColumnHead from '../ColumnHead';
// import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import FetchColleges from './FetchColleges';
import TestColleges from '../testing/TestColleges';
import TestLoading from '../testing/TestLoading';
import Search from '../assets/search.png'

export default function CollegeList() {
    const collegeList = FetchColleges();
    const [colleges, setColleges] = useState(collegeList)
    useEffect(() => {
        setColleges(collegeList)
    })
    const [search, setSearch] = useState('')
    const [expandAll, setExpandAll] = useState(false)
    const [filter, setFilter] = useState('')

    // console.log(colleges);
    // const getCollegePos = id => colleges.findIndex((college) => college.id === id)
    // const handleDragEnd = event => {
    //     const { active, over } = event
    //     if (active.id === over.id) return;
    //     setColleges(colleges => {
    //         const originalPos = getCollegePos(active.id)
    //         const newPos = getCollegePos(over.id)
    //         return arrayMove(colleges, originalPos, newPos)
    //     })
    // }
    // const sensors = useSensors(
    //     useSensor(PointerSensor),
    //     useSensor(TouchSensor),
    //     useSensor(KeyboardSensor, {
    //         coordinateGetter: sortableKeyboardCoordinates
    //     })
    // )

    return (
        <div>
            {/* <table
                className="bg-blue-50 overflow-hidden border-collapse touch-pan-y"
            // cellSpacing={0}
            // cellPadding={5}
            // rules="all"
            // style={{
            //     borderWidth: 1,
            //     borderStyle: "solid",
            //     width: "100%",
            //     borderCollapse: "collapse"
            // }}
            >
                <tbody>
                    <ColumnHead />
                    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                        <Colleges collegeList={colleges} />
                    </DndContext>
                </tbody>
            </table> */}
            <div className='mt-6 ml-6'>
                <select name="" id="" onClick={(e) => setFilter(e.target.value)} className='outline bg-slate-200 outline-cyan-500 rounded-md px-4 py-2'>
                    <option value="Name" selected>Name</option>
                    <option value="Branch">Branch</option>
                </select>
            </div>
            {console.log(filter)}
            <div className='container flex items-center p-6 '>
                <img src={Search} alt="search" className='absolute size-6 ml-4' />
                <input type="search" name="search_location" id="1" className='bg-slate-200 px-12 py-2 w-full outline-cyan-500 rounded-full focus:bg-blue-100' placeholder='Search computer engineering' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            </div>
            <div className='flex justify-end mr-6 mb-6'>
                <button type="button" value="" className='bg-blue-900 text-white rounded-full px-4 py-2' onClick={() => setExpandAll(!expandAll)}>Expand All</button>
            </div>
            {console.log(expandAll)}
            {colleges == false && <TestLoading />}
            {
                colleges.filter((college) => {
                    return search.toLowerCase() === '' ? college : (filter === "Name" ? college.COLLEGE_NAME.toLowerCase().includes(search) : college.BRANCH_LIST.toLowerCase().includes(search))
                }).map((college, i) => {
                    return <TestColleges key={i} props={college} expand={expandAll} />
                })
            }

        </div>
    )
}
