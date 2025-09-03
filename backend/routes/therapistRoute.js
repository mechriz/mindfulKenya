import express from 'express';
import { loginTherapist, appointmentsTherapist, appointmentCancel, therapistList, changeAvailablity, appointmentComplete, therapistDashboard, therapistProfile, updateTherapistProfile } from '../controllers/therapistController.js';
import authTherapist from '../middleware/authTherapist.js';
const therapistRouter = express.Router();

therapistRouter.post("/login", loginTherapist)
therapistRouter.post("/cancel-appointment", authTherapist, appointmentCancel)
therapistRouter.get("/appointments", authTherapist, appointmentsTherapist)
therapistRouter.get("/list", therapistList)
therapistRouter.post("/change-availability", authTherapist, changeAvailablity)
therapistRouter.post("/complete-appointment", authTherapist, appointmentComplete)
therapistRouter.get("/dashboard", authTherapist, therapistDashboard)
therapistRouter.get("/profile", authTherapist, therapistProfile)
therapistRouter.post("/update-profile", authTherapist, updateTherapistProfile)

export default therapistRouter;
