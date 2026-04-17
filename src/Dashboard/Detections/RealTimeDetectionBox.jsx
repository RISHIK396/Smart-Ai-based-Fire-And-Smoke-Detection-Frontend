import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faWifi, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const RealTimeDetectionBox = () => {
    return (
        <div className="w-full h-full flex items-center justify-center mt-2 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full text-center">

                {/* Header */}
                <div className="mb-6 text-left">
                    
                    {/* Top Row */}
                    <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                            icon={faTriangleExclamation}
                            className="text-red-500"
                        />
                        <p className="font-medium text-gray-700">
                            Recent Detections
                        </p>
                    </div>

                    {/* Sub Header */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-sm text-gray-600">
                            Recent Detections data via WebSockets integration
                        </h3>

                        <span className="flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1 text-xs bg-gray-50">
                            <FontAwesomeIcon
                                icon={faWifi}
                                className="text-green-500"
                            />
                            <span className="text-gray-700">Live</span>
                        </span>
                    </div>
                </div>

                {/* Camera Icon */}
                <div className="mb-4">
                    <FontAwesomeIcon
                        icon={faCamera}
                        className="text-gray-400 text-4xl"
                    />
                </div>

                {/* Heading */}
                <h3 className="text-lg font-semibold mb-2">
                    No Detections Recorded
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm">
                    When your devices detect smoke, fire, heat, or gas,
                    real-time
                </p>
                <p className="text-gray-500 text-sm">
                    images and sensor data will be displayed here.
                </p>

                {/* Divider */}
                <div className="my-5 border-t"></div>

                {/* WebSocket Info */}
                <div className="bg-blue-50 rounded-xl p-4 w-full md:w-[60%] mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <FontAwesomeIcon
                            icon={faWifi}
                            className="text-blue-600"
                        />
                        <p className="font-medium text-blue-700">
                            WebSocket Integration Ready
                        </p>
                    </div>

                    <p className="text-xs text-blue-600">
                        Detections will automatically appear here when devices send alerts
                        with images and sensor data in real-time.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default RealTimeDetectionBox;