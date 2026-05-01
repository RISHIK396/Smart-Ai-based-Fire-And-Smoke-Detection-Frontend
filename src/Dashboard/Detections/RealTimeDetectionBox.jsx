import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { io } from "socket.io-client";
import DefaultSection from "./DefaultSection";
import { faWifi, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import ShowDetectionByDate from "./ShowDetectionByDate";
import DeviceModal from "./DeviceModal";
import DeviceDetection from "./DeviceDetection";

const RealTimeDetectionBox = ({ report }) => {

    const [alert, setAlert] = useState([]);
    const [selectedDateData, setSelectedDateData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);

    // 🔥 Extract detections properly
    const processed = [];

    report.forEach((r) => {
        r.detections?.forEach((det) => {
            processed.push({
                deviceId: r.deviceId,
                deviceName: r.device?.name,
                location: r.device?.location,
                mlConfidence: det.mlConfidence,
                temperature: det.temperature,
                smokeLevel: det.smokeLevel,
                image: det.files?.[0]?.url,
                createdAt: r.createdAt
            });
        });
    });

    const groupedByDate = processed.reduce((acc, item) => {
        const dateKey = new Date(item.createdAt).toDateString();

        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }

        acc[dateKey].push(item);
        return acc;
    }, {});

    // 🔥 Socket setup
    useEffect(() => {
        const socket = io("http://localhost:3000");

        socket.on("fireAlert", (data) => {
            console.log("🚨 New Alert:", data);
            setAlert((prev) => [data, ...prev]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center mt-2 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full text-center">

                {/* Header */}
                <div className="mb-6 text-left">
                    <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500" />
                        <p className="font-medium text-gray-700">
                            Recent Detections
                        </p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-sm text-gray-600">
                            Real-time detection data
                        </h3>

                        <span className="flex items-center gap-1 rounded-lg border px-2 py-1 text-xs bg-gray-50">
                            <FontAwesomeIcon icon={faWifi} className="text-green-500" />
                            <span className="text-gray-700">Live</span>
                        </span>
                    </div>
                </div>

                {/* ✅ WebSocket banner */}
                <div className="w-full flex gap-2 p-3 bg-green-100 border border-green-400 rounded-2xl mb-4">
                <FontAwesomeIcon icon={faWifi} className="text-green-500 animate-pulse font-bold text-xl" />
                <p className="text-sm text-green-700 font-bold">
                    WebSocket Connected - Receiving real-time detection data
                </p>
                </div>
                {/* Content */}
                {/* here we are checking the length */}
                {Object.keys(groupedByDate).length > 0 ? (
                    // here we are converting the object of object to array
                    Object.entries(groupedByDate).map(([date, items], i) => {
                        const dateObj = new Date(date);

                        return (
                                <ShowDetectionByDate
                                    key={i}
                                    month={dateObj.toLocaleString("default", { month: "long" })}
                                    date={dateObj.getDate()}
                                    year={dateObj.getFullYear()}
                                    totalDetections={items.length}
                                    onClick={() => {
                                        setSelectedDateData(items);// 🔥 use for modal
                                        setIsModalOpen(true);
                                        setSelectedDevice(null);
                                    
                                    }}
                                    
                                />
                        );
                    })
                ) : (
                    <DefaultSection />
                )}

                {/* Device Modal */}
                 <DeviceModal selectedDateData={selectedDateData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setSelectedDevice={setSelectedDevice} />

                 {
                    selectedDevice  && <DeviceDetection data={selectedDevice}
                        onBack={() => setSelectedDevice(null)}
                        onClose={() => setIsModalOpen(false)}/>
                 }


            </div>
        </div>
    );
};

export default RealTimeDetectionBox;