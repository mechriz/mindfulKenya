import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addTherapist, allTherapists, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/therapistController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-therapist", authAdmin, upload.single('image'), addTherapist)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-therapists", authAdmin, allTherapists)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;