import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { setUserData,setDarkMode } from './redux/features/userSlice'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Home, CreatePost,AISearch } from './pages/index.js'
import {logo} from './assets/index.js'
import { CiSun, BsFillMoonStarsFill,SiProcesswire } from 'react-icons/all';
import { FloatButton  } from 'antd';

// const Home = ()=>import('./pages/Home')

function App() {
  const dispatch = useDispatch()
  const { isDark } = useSelector((state)=>state.user);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => setWidth(window.innerWidth);


  const handleDarkMode = ()=>{
    dispatch(setDarkMode(!isDark))
  }

  const buttonSize = width > 800 ? '40px' : '40px';
  // fixed top-0 z-10
  return (
      <div style={{backgroundColor : isDark ? '#161616' : 'white'}}>
        <header className="w-full  pb-2 flex justify-between items-center sm:px-8 px-4 border-b border-b-[#e6ebf4]">
          <Link to="/">
          <div className="logo_me flex items-center justify-center">
            <SiProcesswire className="mt-2" style={{
              color: isDark ? 'white' : 'black',
            }}/>
            <div
            style={{color : isDark ? 'white' : '#222328',
              color: isDark ? 'white' : 'black',
           }}
           className="text-[20px] ml-2 font-extrabold  mt-2"
            >PEXEL AI</div>
          </div>
            
          </Link>

          <div
            style={{backgroundColor : isDark ? 'white' : '#b048ff', width : buttonSize, height : buttonSize, boxShadow : `0px 0px 15px ${isDark ? 'white' : '#ff77e6'}`}}
            className={`fixed justify-center items-center flex bottom-12 z-20 mode_btn right-10 rounded-full`}
            onClick={handleDarkMode}
          >
            {isDark ? <CiSun /> : <BsFillMoonStarsFill className="text-white"/>}
          </div>
          <Link style={{background : isDark ?  'linear-gradient(to right, #01fa92, #ff5a5a,#f477ff)' : 'linear-gradient(to right, #01fa92, #ff5e00,#a802cd)'}} to="/ai-search" className="font-inter mt-2 font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
            AI Search
          </Link>

          <Link style={{background : 'linear-gradient(to right, #9d6cff, #b048ff,#f477ff)'}} to="/create-post" className="font-inter mt-2 font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
            Create
          </Link>
        </header>

        <main style={{backgroundColor : isDark ? '#161616' : 'white'}}  className="sm:p-8 px-4 pu-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create-post" element={<CreatePost />}/>
            <Route path="/ai-search" element={<AISearch />}/>
          </Routes>
        </main>
        <FloatButton.BackTop className="bottom-0 right-10" />
      </div>
  )
}

export default App

















