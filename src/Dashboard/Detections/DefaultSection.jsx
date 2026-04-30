import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faWifi } from "@fortawesome/free-solid-svg-icons";
const DefaultSection = () => {
  return (
    <div>
        {/* Header */}
        
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
  )
}

export default DefaultSection