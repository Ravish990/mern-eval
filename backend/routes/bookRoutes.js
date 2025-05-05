const bookController = require("../controllers/bookController")

const express = require('express');

const routes = express.Router();

routes.get("/", bookController.getAllBooks);

routes.post("/add", bookController.createBooks)
routes.put("/update", bookController.updateBook);
routes.delete("/delete/:id", bookController.deleteBook);

routes.get("/author/:id",bookController.getByAuthor)
routes.get("/title/:id",bookController.getByTitle)
routes.get("/:id",bookController.getBookById)
module.exports = routes;