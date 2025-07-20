import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['video', 'office', 'site'],
      required: true,
    },
    date: Date,
    time: String,
    Fname: String,
    Lname: String,
    email: String,
    phone: String,
    subject: String,
    address: String,
    platform: String, // Optional for video calls
  },
  { timestamps: true }
);

export default mongoose.models.Appointment ||
  mongoose.model('Appointment', AppointmentSchema);
