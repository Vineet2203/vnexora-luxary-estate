import mongoose, { Schema, Document } from 'mongoose';

export interface IPartnership extends Document {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  propertySize: string;
  createdAt: Date;
}

const PartnershipSchema = new Schema<IPartnership>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  propertyType: { type: String, required: true },
  propertySize: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite issues in dev
export default mongoose.models.Partnership ||
  mongoose.model<IPartnership>('Partnership', PartnershipSchema);
