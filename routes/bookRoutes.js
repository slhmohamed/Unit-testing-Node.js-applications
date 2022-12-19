const router=require("express").Router();
const bookController=require("../controllers/bookController");
const{schemaValidator} =require("../middlewares/schemaValidator")
 const {createBook,updateBook,checkBookId} =require("./schemas/bookSchemas") 
router.get("/",bookController.getAll);
router.get("/:id",schemaValidator(checkBookId, "params"),bookController.getSingle);
router.post("/",schemaValidator(createBook),bookController.createBook)
router.put("/:id",schemaValidator(checkBookId, "params"),schemaValidator(updateBook),bookController.updateBook);
router.delete("/:id",schemaValidator(checkBookId, "params"),bookController.deleteBook);


module.exports=router;