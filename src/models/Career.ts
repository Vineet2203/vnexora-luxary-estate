// src/models/Career.ts
import mongoose, { Schema, model, models } from 'mongoose';

const CareerSchema = new Schema({
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
  createdAt: { type: Date, default: Date.now },
});

const Career = models.Career || model('Career', CareerSchema);
export { CareerSchema };