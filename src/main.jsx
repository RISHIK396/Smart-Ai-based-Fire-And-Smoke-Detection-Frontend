import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './SignUp/Signup.jsx'
import Login from './SignUp/Login.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EmergencyAlert from './Alert/EmergencyAlert.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ToastContainer />
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/alert/:token" element={<EmergencyAlert/>}/>
        {/* <Route path="/alert/:token" element={<EmergencyAlert />} /> */}
        {/* <Route path="/alert/:token/escalated" element={<EscalatedPage />} /> */}
        {/* <Route path="/alert/:token/ignored" element={<IgnoredPage />} /> */}
    </Routes>
    </BrowserRouter>
)
