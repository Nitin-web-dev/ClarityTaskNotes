import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {removeNote} from '../../store/slices/UserSlice'
const Card = ({data,idx}) => {

  const dispatch = useDispatch();

  const deleteNote = (payload) => {
    dispatch(removeNote(payload));
  }

  return (
    <div class="p-4 lg:w-1/3">
    <div class=" bg-gray-800 bg-opacity-40 px-8 p-10 rounded-lg overflow-hidden text-center relative">
      <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">
        {data.title}
      </h1>
      <p class="leading-relaxed mb-3">
       {data.description}
      </p>
      <button onClick={() => deleteNote(idx)} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        Delete
      </button>
      <NavLink to={`/card/${idx}`} class="text-indigo-400 inline-flex items-center">
        view More
     
      </NavLink>
    </div>
  </div>
  )
}

export default Card
