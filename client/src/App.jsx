import style from  "./App.module.css"
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail"
import Activity from './components/Form/Activity';
import Navbar from "./components/Navbar/Navbar";

function App() {


  return (
    <div className={style.App}>
      <div className={style.container}>
        <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/CreateActivity' element={<Activity/>}/>
      </Routes>   
      </div>
    </div>

  )
}

export default App
