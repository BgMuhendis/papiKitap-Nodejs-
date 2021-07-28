const router = require("express").Router();
const imageController = require("../controller/imageController");

router.get("/", imageController.showImages);
router.get("/:id");
router.post("/", imageController.postImages);
router.post("/update/:id");
router.post("/delete/:id");




module.exports = router;