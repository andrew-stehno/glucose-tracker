const router = require("express").Router();
const glucoseController = require("../../controllers/glucoseController");

// Matches with "/api/books"
router.route("/")
  .get(glucoseController.findAll)
  .post(glucoseController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(glucoseController.findById)
  .put(glucoseController.update)
  .delete(glucoseController.remove);

module.exports = router;