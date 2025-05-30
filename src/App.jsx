// import React from 'react'
// import SideBar from './components/SideBar'
// import Header from './components/Header'
// import DashBoardMainContent from './components/DashBoardMainContent'
// import SimpleAppointmentCard from './components/SimpleAppointmentCard'

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-100 p-4">
//       <div className="rounded-2xl bg-white p-4 shadow-lg flex gap-4">
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import SideBar from './components/sidebar'
import Header from './components/header'
import DashBoardMainContent from './components/dashboardmaincontent'
import SimpleAppointmentCard from './components/simpleappointmentcard'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-4">
      {/* Main Container */}
      <div className="rounded-2xl bg-white p-4 shadow-lg flex gap-4">
        
        {/* Sidebar */}
        <div className="w-1/5">
          <SideBar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Header */}
          <Header />

          {/* Dashboard and Appointment Area */}
          <div className="flex gap-4">
            <div className="w-3/5">
              <DashBoardMainContent />
            </div>
            <SimpleAppointmentCard />

            {/* Appointments */}
            {/* <div className="w-2/5">
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

