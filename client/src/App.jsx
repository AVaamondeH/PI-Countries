//import { useState } from 'react'
import './App.css'
import Home from "./components/Home/Home";
import './App.css';
import {Routes, Route} from "react-router-dom"

function App() {


  return (
    <>
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>   
    </div>

    </>
  )
}

export default App
