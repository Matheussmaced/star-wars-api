import { getAllFilms, createFilm, updateFilm, deleteFilm } from "../services/filmService.js";

export const getFilms = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { films, totalFilms } = await getAllFilms(page, limit);
    const totalPages = Math.ceil(totalFilms / limit);

    return res.json({
      films,
      pagination: {
        totalFilms,
        totalPages,
        currentPage: page,
        limit
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao buscar filmes." });
  }
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
