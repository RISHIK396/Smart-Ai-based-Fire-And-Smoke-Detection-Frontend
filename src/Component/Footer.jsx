import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="w-full  bg-white px-6 py-5 
                flex flex-col sm:flex-row 
                justify-between items-center gap-4 border-t border-gray-200">

            {/* 🔥 Left: Logo + Name */}
            <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl 
                        bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 
                        flex justify-center items-center shadow-md">

                    <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="text-white text-lg"
                    />
                </div>

                <span className="text-lg font-semibold text-gray-800">
                    Fire Detection System
                </span>
            </div>

            {/* 📄 Right: Copyright */}
            <p className="text-sm text-gray-500 text-center sm:text-right">
                © 2026 AI Fire Detection System. All rights reserved.
            </p>

        </div>
    )
}

export default Footer