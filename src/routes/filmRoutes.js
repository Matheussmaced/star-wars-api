import express from "express";
import { getFilms, addFilm, editFilm, removeFilm } from "../controllers/filmController.js";

const router = express.Router();

/**
 * @swagger
 * /films:
 *   get:
 *     summary: Retorna uma lista de filmes
 *     description: Retorna uma lista de filmes com paginação
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Número da página
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: limit
 *         in: query
 *         description: Número de filmes por página
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Lista de filmes com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 films:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       image_url:
 *                         type: string
 *                       trailer_url:
 *                         type: string
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalFilms:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     currentPage:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getFilms);

/**
 * @swagger
 * /films:
 *   post:
 *     summary: Adiciona um novo filme
 *     description: Adiciona um filme à lista de filmes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image_url:
 *                 type: string
 *               trailer_url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Filme criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", addFilm);

/**
 * @swagger
 * /films/{id}:
 *   put:
 *     summary: Editar um filme
 *     description: Edita um filme na lista de filmes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do filme a ser editado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image_url:
 *                 type: string
 *               trailer_url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Filme editado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.put("/:id", editFilm);

/**
 * @swagger
 * /films/{id}:
 *   delete:
 *     summary: Deleta um filme
 *     description: Deleta um filme da lista de filmes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do filme a ser deletado
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Filme deletado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.delete("/:id", removeFilm);

export default router;
