
//import './index.css'
import Person from './components/Person.jsx'
import CustomInput from './components/CustomInput.jsx'
import Form from './components/Form.jsx';
import TrafficLight from './components/TrafficLight.jsx';
import MovingLight from './components/MovingLight.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import CheckingIn from './components/CheckingIn.jsx';
import Accordian from './components/Panel.jsx';
import FilterableList from './components/FilterableList.jsx';
import Clock from './components/Clock.jsx'
//router
import React from 'react';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Profile from './components/Profile.jsx';
import Spinach from './components/Spinach.jsx';
import Popeye from './components/Popeye.jsx';
import DefaultProfile from './components/DefaultProfile.jsx';
import ErrorPage from './components/ErrorPage.jsx';
//
import Router from './Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
 