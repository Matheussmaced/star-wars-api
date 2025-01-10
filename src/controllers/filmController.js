import { getAllFilms, createFilm, updateFilm, deleteFilm } from "../services/filmService.js";

export const getFilms = async (req, res) => {
  const films = await getAllFilms();
  res.send(films);
};

export const addFilm = async (req, res) => {
  const film = await createFilm(req.body);
  res.send(film);
};

export const editFilm = async (req, res) => {
  const film = await updateFilm(req.params.id, req.body);
  res.send(film);
};

export const removeFilm = async (req, res) => {
  const film = await deleteFilm(req.params.id);
  res.send(film);
};
