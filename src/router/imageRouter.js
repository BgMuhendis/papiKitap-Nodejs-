const router = require("express").Router();
const imageController = require("../controller/imageController");

router.get("/", imageController.showImages);
router.get("/:id",imageController.getIdImage);
router.post("/", imageController.saveImage);
router.post("/update/:id" ,imageController.updateImage);
router.post("/delete/:id",imageController.deleteImage);




module.exports = router;