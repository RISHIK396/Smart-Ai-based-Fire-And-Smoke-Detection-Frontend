import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faSmoking,
  faLocationDot,
  faClock,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const DetectionCard = ({ item }) => {
  const severity = item.severity || "LOW";

  const time = item.createdAt
    ? new Date(item.createdAt).toLocaleTimeString()
    : "--";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col gap-3">

      {/* Top */}
      <div className="flex justify-between items-center">

        {/* Left */}
        <div className="flex gap-3 items-center">
          <div className="bg-orange-100 p-3 rounded-xl">
            <FontAwesomeIcon
              icon={item.type === "smoke" ? faSmoking : faFire}
              className="text-orange-500"
            />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              {item.type === "smoke" ? "Smoke Detected" : "Fire Detected"}
            </h3>
            <p className="text-xs text-gray-500">
              {item.status || "Active"}
            </p>
          </div>
        </div>

        {/* Right */}
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
      </div>

      {/* Sensor Info */}
      <div className="bg-gray-50 p-3 rounded-xl flex justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" />
          {item.location || "Unknown"}
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} />
          {time}
        </div>
      </div>

      {/* Image */}
      {item.image ? (
        <img
          src={item.image.replace("/upload/", "/upload/w_800,q_auto,f_auto/")}
          alt="detection"
          className="rounded-xl h-[200px] w-full object-cover"
        />
      ) : (
        <div className="border-2 border-dashed rounded-xl h-[150px] flex flex-col items-center justify-center text-gray-400">
          <FontAwesomeIcon icon={faCamera} />
          <p className="text-xs">No image</p>
        </div>
      )}
    </div>
  );
};

const DeviceDetection = ({ data = [], onBack }) => {
  if (!data.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-[650px] bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            🔥 {data[0]?.deviceName}
          </h2>

          <button
            onClick={onBack}
            className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-100"
          >
            Back
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-1">
          {data.map((item) => (
            <DetectionCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default DeviceDetection;