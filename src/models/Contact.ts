// src/models/Contact.ts
import mongoose, { Schema, model, models } from 'mongoose';

const contactSchema = new Schema({
  interest: String,
  firstName: String,
  lastName: String,
  country: String,
  city: String,
  email: String,
  phone: String,
  message: String,
  agree: Boolean,
  createdAt: { type: Date, default: Date.now },
});

const Contact = models.Contact || model('Contact', contactSchema);
export default Contact;
