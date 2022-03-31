import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidenavbar from './components/SideNav/SideNavbar';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Notifications from './components/Notifications/Notifications';
import Profile from './components/Profile/Profile';
import RightNav from './components/RightNav/RightNav';
const App = () => {
  return (
    <>
      <div className='bg-black flex flex-row justify-around App px-pageMargin'>
        <div className='w-sideContainer'>
          <Sidenavbar />
        </div>
        <div className='w-mainContainer px-10 h-height feed'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/explore' element={<Explore />}></Route>
            <Route
              exact
              path='/notifications'
              element={<Notifications />}></Route>
            <Route exact path='/profile' element={<Profile />}></Route>
          </Routes>
        </div>
        <div className='w-sideContainer'>
          <RightNav />
        </div>
      </div>
    </>
  );
};

export default App;
