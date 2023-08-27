import React from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {deleteNotes} from '../../store/slices/UserSlice'
const Header = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const deletNotes = () => {
      dispatch(deleteNotes());
  } 
  return (
<header class="text-gray-400 bg-gray-950 body-font">
  <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a href='/'class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img width="40" height="40" src="https://img.icons8.com/nolan/64/todo-list.png" alt="todo-list"/>
      <span class="ml-3 text-xl">Clarity Task Notes</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to='/' class="mr-5 hover:text-white">HOME</NavLink>

    </nav>
    <button onClick={() => navigator('/addtask')} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Add +
    </button>
    <button onClick={() => deletNotes()} class="inline-flex items-center bg-red-300 text-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Delete All
    </button>
  </div>
</header>
  )
}

export default Header
