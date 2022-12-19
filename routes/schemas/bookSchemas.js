
const Joi = require("joi");
const { JoiObjectId } = require("../../middlewares/schemaValidator");
exports.createBook = Joi.object({
    title: Joi.string().trim().min(3).max(30).required(),
     author: Joi.string().min(3).required(),
     year: Joi.number().min(3).required(),
     pages: Joi.number().min(1).required(),
       
    });
  exports.updateBook = Joi.object({
    title: Joi.string().trim().min(3).max(30).required(),
    author: Joi.string().min(3).required(),
    year: Joi.number().min(3).required(),
    pages: Joi.number().min(1).required(),
       
    });
  
   
  exports.checkBookId=Joi.object({
    id:JoiObjectId().required()
  })
   
 