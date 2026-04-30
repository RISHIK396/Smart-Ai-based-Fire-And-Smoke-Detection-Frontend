import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faCamera,
  faLocationDot,
  faClock,
  faFire,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const DeviceDetection = ({ data = [], onBack, onClose }) => {
  if (!data.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-[650px] bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Detections from {data[0]?.deviceName || "Device"}
          </h2>

          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-fit px-3 py-1 border rounded-lg text-sm hover:bg-gray-100"
        >
          ← Back to Devices
        </button>

        {/* 🔥 MAP STARTS HERE */}
        <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">

          {data.map((item) => {

            const time = item.createdAt
              ? new Date(item.createdAt).toLocaleTimeString()
              : "Invalid Time";

            const severity = item.severity || "LOW";

            return (
              <div
                key={item.id}
                className="border rounded-2xl p-4 flex flex-col gap-3 relative"
              >

                {/* Left border */}
                <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-l-2xl"></div>

                {/* Top */}
                <div className="flex justify-between items-center">

                  <div className="flex gap-3 items-center">
                    <div className="bg-red-100 p-3 rounded-xl">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.type || "Gas"} Detection
                      </h3>
                      <p className="text-sm text-gray-500">Active</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full text-white ${
                        severity === "HIGH"
                          ? "bg-red-500"
                          : severity === "MEDIUM"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {severity}
                    </span>

                    <span className="border px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <FontAwesomeIcon icon={faCamera} />
                      Captured
                    </span>
                  </div>
                </div>

                {/* Sensor Info */}
                <div className="bg-gray-100 p-3 rounded-xl text-sm grid grid-cols-2 gap-2">

                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-blue-500"/>
                    {item.location || "Unknown"}
                  </p>

                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-gray-500"/>
                    {time}
                  </p>

                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faTriangleExclamation}/>
                    {severity}
                  </p>

                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faFire}/>
                    {item.type || "Gas"}
                  </p>

                </div>

                {/* Image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt="detection"
                    className="rounded-xl h-[180px] object-cover"
                  />
                ) : (
                  <div className="border-2 border-dashed rounded-xl h-[150px] flex flex-col items-center justify-center text-gray-400">
                    <FontAwesomeIcon icon={faCamera} className="text-xl mb-2" />
                    <p>Real-time image from device</p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default DeviceDetection;