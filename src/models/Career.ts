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
  positionType: String,
  department: String,  
  otherDepartment: String,
  resumeFileId: mongoose.Schema.Types.ObjectId, //  GridFS file reference
  resumeFilename: String,                       //  Optional original file name
  createdAt: { type: Date, default: Date.now },
});

const Career = models.Career || model('Career', CareerSchema);
export default Career;
