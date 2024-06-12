import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ProjectLinks from './pages/Projects/ProjectLinks';



 export default function App() {
  return (
    <div className='appContainer'>
      <Nav />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<ProjectLinks/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}
