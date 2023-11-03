import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
 