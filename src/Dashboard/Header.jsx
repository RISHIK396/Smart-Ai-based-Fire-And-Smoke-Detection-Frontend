import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { io } from 'socket.io-client'
import Popup from './Popup'
const Header = ({ user, setSocketData }) => {
    const [alert, setAlert] = useState([]);
    const [popup, setPopup] = useState(null);
    const audioRef = useRef(null);
    // here we will mention that width-500 and height- any the name of the person and its email to be removed
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const data = await axios.post("https://fire-and-smoke-backend.onrender.com/auth/logout", {}, {
                withCredentials: true
            });
            if (data.status == (201)) {
                console.log("Logged Out");
                alert("Done");
                navigate('/');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // 🔥 Socket setup
    useEffect(() => {
        const socket = io("https://fire-and-smoke-backend.onrender.com");

        socket.on("connect", () => {
            console.log("✅ Connected:", socket.id);
        });

        socket.on("fireAlert", (data) => {
            console.log("🚨 New Alert:", data);

            setAlert((prev) => {
                const updated = [data, ...prev];

                setSocketData(updated);

                return updated;
            });

            // ✅ Set popup separately (single object)
            setPopup(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
    if (popup) {
        // create audio instance
        audioRef.current = new Audio("/alarm.mp3");

        audioRef.current.loop = true; // 🔁 keep ringing
        audioRef.current.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });
    }

    return () => {
        // cleanup if popup changes
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };
}, [popup]);

    const handleClosePopup = ()=>{
        setPopup(null);
        if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.currentTime=0;
        }
    }

    return (
        <>
            <div className='w-full bg-white shadow-md px-6 py-3 flex items-center justify-between fixed'>

                {/* 🔥 Left: Logo + Name */}
                <div className='flex items-center gap-4'>

                    <div className="w-12 h-12 rounded-xl 
                        bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
                        flex justify-center items-center shadow-md">

                        <FontAwesomeIcon
                            icon={faFireFlameCurved}
                            className="text-white text-xl"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='text-black text-lg font-semibold'>
                            Fire Detection System
                        </h1>
                        <p className='text-gray-400 text-sm'>
                            AI-Based Emergency Response
                        </p>
                    </div>
                </div>

                {/* 👤 Right: User + Logout */}
                <div className='flex items-center gap-4'>

                    <div className='flex flex-col text-right'>
                        <h1 className='text-black text-sm font-medium'>
                            {user.name}
                        </h1>
                        <p className='text-gray-400 text-xs'>
                            {user.email}
                        </p>
                    </div>

                    <button className='flex items-center gap-2 border border-gray-400 rounded-xl px-4 py-2 
                           hover:bg-gray-100 transition duration-300' onClick={() => handleLogout()}>

                        <FontAwesomeIcon
                            icon={faRightFromBracket}
                            className="text-black text-sm"
                        />

                        <span className='text-sm'>Logout</span>
                    </button>

                </div>

            </div>
            <Popup popup={popup} onClose={handleClosePopup} />
        </>
    )
}

export default Header