import mongoose from 'mongoose';

const genderSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  abbreviation: { type: String, required: true },
});

const Gender = mongoose.model('Gender', genderSchema);

export default Gender;
