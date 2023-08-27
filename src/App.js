import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AddTask from './components/pages/AddTask';
import ViewNote from './components/pages/ViewNote';
// import EditTask from './components/pages/EditTask';


const App = () => {


    return (
        <>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addtask' element={<AddTask />} />
                    <Route path='/card/:id' element={<ViewNote />} />
                    {/* <Route path='/editcard/:id' element={<EditTask />} /> */}

                  

                </Routes>
        </>
    )
}

export default App;