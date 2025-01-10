import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String },
  trailer_url: { type: String },
});

const Film = mongoose.model("Film", filmSchema);

export default Film;
