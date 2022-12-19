const bookModel = require("../models/bookModel");
const asyncHandler = require("express-async-handler");
const { NotFoundError } = require("../middlewares/apiError");
const {SuccessResponse,SuccessMsgDataResponse} = require("../middlewares/apiResponse");

exports.createBook=asyncHandler(async(req,res)=>{
    const book=await bookModel.create(req.body);
    return new SuccessMsgDataResponse(book, "Book created successfully").send(res);

})

exports.getAll=asyncHandler(async(req,res)=>{
    const books=await bookModel.find({})
    return new SuccessResponse(books).send(res)
})

exports.getSingle=asyncHandler(async(req,res)=>{
    const book =await bookModel.findById(req.params.id);
    if(!book) throw new NotFoundError("No book found with that id");
    return new SuccessResponse(book).send(res)
})
exports.updateBook=asyncHandler(async(req,res)=>{
    const book = await bookModel.findByIdAndUpdate( req.params.id, req.body);
    if (!book) {
      throw new NotFoundError("No book found with that id");
    }
    console.log(book);
    return new SuccessMsgDataResponse(book, "book updated successfully").send(res);  
})

exports.deleteBook=asyncHandler(async(req,res)=>{
    const book =await bookModel.findByIdAndDelete(req.params.id)
    if (!book) {
        throw new NotFoundError("No book found with that id");
      }
      return new SuccessMsgDataResponse(book, "book deleted successfully").send(res);  
})