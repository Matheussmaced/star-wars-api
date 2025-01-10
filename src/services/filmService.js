import Film from "../models/filmModel.js";

export const getAllFilms = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const films = await Film.find().skip(skip).limit(limit);
  const totalFilms = await Film.countDocuments();

  return { films, totalFilms };
};

export const createFilm = async (data) => {
  const film = new Film(data);
  return await film.save();
};

export const updateFilm = async (id, data) => {
  return await Film.findByIdAndUpdate(id, data, { new: true });
};

export const deleteFilm = async (id) => {
  return await Film.findByIdAndDelete(id);
};
