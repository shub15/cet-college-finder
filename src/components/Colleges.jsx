import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import College from './College'

export default function Colleges({collegeList}) {
  return (
    <SortableContext items={collegeList} strategy={verticalListSortingStrategy}>
      {collegeList.map((college) => (
        <College id={college.id} key={college.id} college={college}/>
      ))}
    </SortableContext>
  )
}
