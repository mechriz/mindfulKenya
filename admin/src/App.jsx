import React, { useContext } from 'react'
import { TherapistContext } from './context/TherapistContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTherapist from './pages/Admin/AddTherapist';
import TherapistsList from './pages/Admin/TherapistsList';
import Login from './pages/Login';
import TherapistAppointments from './pages/Therapist/TherapistAppointments';
import TherapistDashboard from './pages/Therapist/TherapistDashboard';
import TherapistProfile from './pages/Therapist/TherapistProfile';

const App = () => {

  const { dToken } = useContext(TherapistContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-therapist' element={<AddTherapist />} />
          <Route path='/therapist-list' element={<TherapistsList />} />
          <Route path='/therapist-dashboard' element={<TherapistDashboard />} />
          <Route path='/therapist-appointments' element={<TherapistAppointments />} />
          <Route path='/therapist-profile' element={<TherapistProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App