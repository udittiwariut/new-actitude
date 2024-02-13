import React from 'react'
import MainHeader from '../components/MainHeader'
import Error from './Error'
import Indivisual from './Indivisual'
import Corporate from './Corporate'
import Ngo from './Ngo'
import OurTeam from './OurTeam'
import NextSteps from './NextSteps'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Signin from './Signin'
import Profile from './Profile'




const AppInner = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<MainHeader/>}>
      <Route path='/' index  element={<Indivisual/>}/>
      <Route path='/Corporate' element={<Corporate/>}/>
      <Route path='/Ngo' element={<Ngo/>}/>
      <Route path='/OurTeam' element={<OurTeam/>}/>
      <Route path='/NextSteps' element={<NextSteps/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppInner;
