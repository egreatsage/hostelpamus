import React from 'react';
import './App.css';
import{Routes,Route,Router} from 'react-router-dom'
import Home from './UserPanel/Pages/Home';
import Navbar from './UserPanel/Components/Navbar';
import Booking from './UserPanel/Pages/Booking';
import Login from './UserPanel/Pages/Login';
import SignUp from './UserPanel/Pages/SignUp';
import Profile from './UserPanel/Pages/Profile';

function App() {
  return (
  <div>
     <AuthContext>
     <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route  path='/Booking' element={<Booking/>}/>
     <Route  path='/Login' element={<Login/>}/>
     <Route  path='/SignUp' element={<SignUp/>}/>
     <Route  path='/Profile' element={<Profile/>}/>
     </Routes>
     </AuthContext>
  </div>
  );
}

export default App;
