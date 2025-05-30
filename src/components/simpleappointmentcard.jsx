import React from 'react'

const appointments = [
  {
    day: 'Tuesday',
    time: '09:00-11:00',
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    color: 'bg-indigo-700 text-white',
    icon: '🦷',
  },
  {
    day: 'Thursday',
    time: '11:00-12:00',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Djones',
    color: 'bg-indigo-100 text-indigo-900',
    icon: '💪',
  },
]

const upcoming = {
  Thursday: [
    { time: '11:00 AM', title: 'Health checkup complete', icon: '💉' },
    { time: '14:00 PM', title: 'Ophthalmologist', icon: '👁️' },
  ],
  Saturday: [
    { time: '12:00 AM', title: 'Cardiologist', icon: '❤️' },
    { time: '16:00 PM', title: 'Neurologist', icon: '🧑‍⚕️' },
  ],
}

const SimpleAppointmentCard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 font-sans">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">October 2021</h2>
        </div>
        <div className="space-x-4 text-xl">
          <button className="text-gray-500">&larr;</button>
          <button className="text-gray-500">&rarr;</button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-sm text-gray-600">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
          <div key={day} className="flex flex-col items-center">
            <div className="font-bold">{day}</div>
            <div className="text-gray-500">{25 + idx}</div>
            <div className="mt-2 space-y-1">
              {idx === 1 && (
                <div className="bg-indigo-700 text-white rounded-full px-2 py-1 text-xs">09:00</div>
              )}
              {idx === 3 && (
                <div className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs">11:00</div>
              )}
              {idx === 5 && (
                <div className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs">12:00</div>
              )}
              {idx === 6 && (
                <div className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs">09:00</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {appointments.map((a, index) => (
          <div key={index} className={`rounded-xl p-4 ${a.color}`}>
            <div className="flex justify-between items-center text-sm mb-1">
              <span>{a.title}</span>
              <span>{a.icon}</span>
            </div>
            <div className="text-sm">{a.time}</div>
            <div className="text-xs">{a.doctor}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">The Upcoming Schedule</h3>
        {Object.entries(upcoming).map(([day, events], idx) => (
          <div key={idx} className="mb-4">
            <h4 className="text-sm text-gray-600 font-medium mb-2">On {day}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {events.map((event, i) => (
                <div key={i} className="bg-indigo-50 rounded-xl px-4 py-3 text-sm flex justify-between items-center">
                  <div>
                    <div className="font-medium">{event.title}</div>
                    <div className="text-xs text-gray-500">{event.time}</div>
                  </div>
                  <div className="text-xl">{event.icon}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
