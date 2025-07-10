// src/models/Career.ts
import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  whatsapp: String,
  portfolioUrl: String,
  coverLetter: String,
  resumeUrl: String,
  positionType: String,//new
  department: String,//new  
  otherDepartment: String, //new
}, { timestamps: true });

export default mongoose.models.Career || mongoose.model('Career', CareerSchema);
