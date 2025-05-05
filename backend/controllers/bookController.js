const product = require('../db/Models/bookModels');
const productModel = require('../db/Models/bookModels')


const createBooks = async(req, res) => {
    const {name,author, price, pages, genre, year} =  req.body;

    const product = new productModel({name, author, price, pages,genre, year});

    

    await product.save();

      res.status(200).json({success: true, message: "book is saved", data : product})


}

const getAllBooks = async(req,res) => {
    const products = await productModel.find({});
    if (!products) {
        res.status(400).json({success: false, message: "book not found"})
    }

    res.status(200).json({success: true, message: "books fetched", data : products})


}

const updateBook = async(req,res) => {
    const productId = req.params.id;

    const updatedProduct = await productModel.findByIdAndUpdate(productId, req.body);


    if (!updatedProduct) {
        res.status(400).json({success: false, message: "book not found"})
    }

    res.status(200).json({success: true, message: "book is updated", data : updatedProduct})

}

const deleteBook = async(req,res) => {
    const productId = req.params.id;
    const deletedProduct = productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
        res.status(400).json({success: false, message: "book not found"})
    }

    res.status(200).json({success: true, message: "book is deleted", data : deleteProduct})
}

const getByAuthor = async(req,res) => {
      const authorId = req.params.id;
      const book = await productModel.findOne({author : req.body.authorId})
      if (!authorId) {
        res.status(404).json({success: false, message : "author not found"})
      }
     
      if(!book) {
        res.status(400).json({success: false, message: "Book is not present"})
    }
      res.status(200).json({success: true, message : "book fetched", data: book})
}
const getByTitle = async(req,res) => {
      const name = req.params.id;
      const book = await productModel.findOne({name : req.body.name})
      if (!name) {
        res.status(404).json({success: false, message : "book not found"})
      }

      
    if(!book) {
        res.status(400).json({success: false, message: "Book is not present"})
    }
      res.status(200).json({success: true, message : "book fetched", data: book})
}

getBookById = async(req,res) => {
    const id = req.params.id;
    const book = await productModel.findOne({name : req.body._id})
    if (!id) {
      res.status(404).json({success: false, message : "book not found"})
    }

    
  if(!book) {
      res.status(400).json({success: false, message: "Book is not present"})
  }
    res.status(200).json({success: true, message : "book fetched", data: book})
    
}



module.exports = {
    createBooks,
    deleteBook,
    updateBook,
    getAllBooks,
    getByAuthor,
    getByTitle,
    getBookById
}

