import React from 'react'
import { Link } from 'react-router-dom'

export default function AddQuestion({examId,subId}) {
  return (
    <div className='bg-blue-500 flex justify-between text-white p-2'>
       <span>Exam Question</span>
       <Link to={`/admin/question/add/${examId}/${subId}`}>
       <span className='cursor-pointer'> + Add Question </span>
       </Link>
    </div>
  )
}
