const Router = require("express")
const router = new Router()
const typeController = require("../controllers/typeController")

router.post("/q", typeController.create)
router.get("/qw", typeController.getAll)

module.exports = router