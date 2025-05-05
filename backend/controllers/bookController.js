
const productModel = require('../db/Models/bookModels');

const createBooks = async (req, res) => {
    try {
        const { name, author, price, pages, genre, year } = req.body;

        const newBook = new productModel({ name, author, price, pages, genre, year });
        await newBook.save();

        return res.status(201).json({ success: true, message: "Book saved successfully", data: newBook });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await productModel.find({});
        return res.status(200).json({ success: true, message: "Books fetched", data: books });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedBook = await productModel.findByIdAndUpdate(productId, req.body, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }

        return res.status(200).json({ success: true, message: "Book updated", data: updatedBook });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedBook = await productModel.findByIdAndDelete(productId);

        if (!deletedBook) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }

        return res.status(200).json({ success: true, message: "Book deleted", data: deletedBook });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

const getByAuthor = async (req, res) => {
    try {
        const author = req.params.author;
        const books = await productModel.find({ author });

        if (!books || books.length === 0) {
            return res.status(404).json({ success: false, message: "No books found for this author" });
        }

        return res.status(200).json({ success: true, message: "Books fetched", data: books });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

const getByTitle = async (req, res) => {
    try {
        const title = req.params.name;
        const book = await productModel.findOne({ name: title });

        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }

        return res.status(200).json({ success: true, message: "Book fetched", data: book });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await productModel.findById(id);

        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }

        return res.status(200).json({ success: true, message: "Book fetched", data: book });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

module.exports = {
    createBooks,
    deleteBook,
    updateBook,
    getAllBooks,
    getByAuthor,
    getByTitle,
    getBookById
};
