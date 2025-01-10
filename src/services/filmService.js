import Film from "../models/filmModel.js";

export const getAllFilms = async () => {
  return await Film.find();
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
