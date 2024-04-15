import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import Layout from './Layout/layout.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/Github/GIthub.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userId' element={<User/>}/>
    <Route 
    loader={githubInfoLoader}   //For optimization it starts loading data before even clicking as soon as curson is moved on that thing.
    path='github'
    element={<Github/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
