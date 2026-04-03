import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './SignUp/Signup.jsx'
import Login from './SignUp/Login.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
)
