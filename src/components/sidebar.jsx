import React from 'react';
import { FaHistory, FaStethoscope, FaChartBar, FaUserMd } from 'react-icons/fa';
import { IoCalendarClearSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiChatsCircleBold } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen w-64 bg-[#F5F8FF] px-6 py-4 rounded-2xl">
      <div>
        <h1 className="text-2xl font-bold text-[#23BDEE] mb-6">
          Health<span className="text-black">care.</span>
        </h1>

        <div>
          <p className="text-gray-400 text-xs uppercase mb-2">General</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[#3E4C59] font-semibold">
              <MdOutlineSpaceDashboard />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 opacity-60">
              <FaHistory />
              <span>History</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 opacity-60">
              <IoCalendarClearSharp />
              <span>Calendar</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 opacity-60">
              <FaStethoscope />
              <span>Appointments</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 opacity-60">
              <FaChartBar />
              <span>Statistics</span>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-gray-400 text-xs uppercase mb-2">Tools</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-gray-400 opacity-60">
              <PiChatsCircleBold />
              <span>Chat</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 opacity-60">
              <FaUserMd />
              <span>Support</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ul>
          <li className="flex items-center gap-2 text-gray-400 opacity-60">
            <FiSettings />
            <span>Setting</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
