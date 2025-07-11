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
}, { timestamps: true });

const Career = models.Career || model('Career', CareerSchema);
export default Career;