const Router = require("express")
const router = new Router()
const feedbackController = require("../controllers/feedbackController")

router.post("/", feedbackController.create)
router.get("/", feedbackController.getAll)

module.exports = router