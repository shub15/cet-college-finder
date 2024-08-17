import React, { useState } from 'react'
import Colleges from './Colleges';
import collegeList from '../json/colleges.json'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import ColumnHead from './ColumnHead';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

export default function CollegeList() {
    const [colleges, setColleges] = useState(collegeList)
    // console.log(college.ID)
    const getCollegePos = id => colleges.findIndex((college) => college.id === id)
    const handleDragEnd = event => {
        const { active, over } = event
        if (active.id === over.id) return;
        setColleges(colleges => {
            const originalPos = getCollegePos(active.id)
            const newPos = getCollegePos(over.id)
            return arrayMove(colleges, originalPos, newPos)
        })
    }
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )
    return (
        <div>
            <table
                className="bg-blue-50 overflow-hidden border-collapse touch-pan-y"
                // cellSpacing={0}
                // cellPadding={5}
                // rules="all"
                id="rightContainer_ContentTable1_gvOptionsList"
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
                        <Colleges collegeList={colleges}/>
                    </DndContext>
                </tbody>
            </table>
        </div>
    )
}
