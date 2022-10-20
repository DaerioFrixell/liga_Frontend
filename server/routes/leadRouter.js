const Router = require("express")
const router = new Router()
const leadkController = require("../controllers/leadController")

router.post("/", leadkController.create)
router.get("/", leadkController.getAll)

module.exports = router