import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Componants/Navbar'
import Main from './Componants/Main'

import Home from './Componants/Home'
import Login from './Componants/Login'
import Registration from './Componants/Registration'
import Signin from './Componants/Signin'
 import {BrowserRouter as Router, Routes, Route, BrowserRouter,} from 'react-router-dom'

import Profile from './Componants/Profile'



export default function App() {

const [users, setUsers]= useState([]);
const [type, setType]= useState()
const [city, setCity]= useState()

useEffect(()=>{
  const storedUsers=JSON.parse(localStorage.getItem('users')) ||[]

  setUsers(storedUsers)
}, [])

const addUser=(user)=>{
   setUsers([...users, user])

  const updatedUsers= [...users, user]
  setUsers(updatedUsers)

  localStorage.setItem('users', JSON.stringify(updatedUsers))
}
const handleDelete=()=>{
  localStorage.removeItem('users')
  users.length=0;
}
console.log()
const length=users.length


 const onCityChange=(cityValue)=>{
  setCity(cityValue)

 }
 const onRoleChange=(role)=>{
  setType(role)

 }
 useEffect(() => {
  console.log('Home rendered');
}, []);

  return (
    <div>
      
      

      <BrowserRouter basename="/React-job-listing-application">
    <Navbar users={users} getCity={onCityChange} getRole={onRoleChange} onDelete={handleDelete} length={length}/>
    



    

  
    <Route exact path='/' element={<Home users={users}/>}/>
<Routes>
  
  
  <Route exact path='/login' element={<Login users={users}/>} />
  <Route exact path='/signin' element={<Signin users={users}/>}/>
  <Route exact path='/registration' element={<Registration addUser={addUser} users={users}/>}/>
  <Route exact path='/main' element={<Main city={city} role={type} />} />
  <Route exact path='/profile' element={<Profile users={users}/>}/>



</Routes>

 

</BrowserRouter>



    </div>
  )
}
   