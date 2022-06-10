import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const RMSchema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
    species: { type: String, required: true },
    type: { type: String, required: false },
    gender: { type: String, required: true }, 
    origin: { type: Object, required: true },
    location: { type: Object, required: true },
    image: { type: String, required: true },
    episode: { type: Array, required: true },
    url: { type: String, required: true },
    created: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const Characters = model('characters', RMSchema);

export default Characters;