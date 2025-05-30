import React from 'react';
import myImage from './../assets/one.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungs, faTooth, faBone } from '@fortawesome/free-solid-svg-icons';

const DashBoardMainContent = () => {
  const items = [
    { label: 'Lungs', icon: faLungs, color: 'bg-red-400' },
    { label: 'Teeth', icon: faTooth, color: 'bg-green-400' },
    { label: 'Bone', icon: faBone, color: 'bg-orange-400' },
  ];

  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  const activityData = [
    ['h-16', 'h-10', 'h-12'],
    ['h-20', 'h-14', 'h-8'],
    ['h-10', 'h-12', 'h-6'],
    ['h-14', 'h-12', 'h-10'],
    ['h-20', 'h-16', 'h-14'],
    ['h-14', 'h-12', 'h-6'],
    ['h-16', 'h-12', 'h-8'],
  ];

  const barColors = ['bg-cyan-400', 'bg-gray-300', 'bg-indigo-700'];

  return (
    <div className="flex-1 bg-white rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

      <div className="flex gap-4">
        <div className="flex bg-sky-50 rounded-lg shadow-md w-4/5 text-center h-110 ml-10 mr-10 relative overflow-hidden">
          <img
            src={myImage}
            alt="Human Body"
            className="w-full h-full object-contain"
          />
          <div className="absolute left-6 top-2/3 -translate-y-1/2 text-[#000080] bg-cyan-500 rounded-lg p-3 py-2 text-white font-semibold">
            Healthy Leg
          </div>
          <div className="absolute top-[20%] right-5 text-white bg-[#000080] rounded-lg p-3 py-2 text-sm font-semibold">
            Healthy Heart
          </div>
        </div>

        <div className="flex flex-col gap-12 w-1/2">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 pt-6 pb-6 rounded-lg shadow-md w-full"
            >
              <div className="flex items-center gap-2 mb-2 text-xl text-gray-700">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl text-gray-700"
                />
                <p className="font-medium">{item.label}</p>
              </div>
              <p className="text-xs text-gray-500 mb-1">Date: 26 Oct 2021</p>
              <div className="h-2 bg-gray-200 rounded">
                <div className={`h-full ${item.color} w-4/5 rounded`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-white w-full max-w-3xl mt-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-indigo-900">Activity</h2>
          <span className="text-sm text-gray-500">3 appointment on this week</span>
        </div>
        <div className="flex justify-between items-end h-40">
          {activityData.map((dayBars, dayIndex) => (
            <div key={dayIndex} className="flex flex-col items-center space-y-1">
              <div className="flex items-end space-x-1">
                {dayBars.map((heightClass, index) => (
                  <div
                    key={index}
                    className={`${barColors[index]} ${heightClass} w-1.5 rounded-full`}
                  ></div>
                ))}
              </div>
              <span className="text-xs text-gray-500 mt-1">{days[dayIndex]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoardMainContent;
