const Router = require("express")
const router = new Router()
const userRouter = require("./userRoutes")
const feedbackRouter = require("./feedbackRouter")
const typeRouter = require("./typeRouter")

router.use("/user", userRouter)
router.use("/feedback", feedbackRouter)
router.use("/type", typeRouter)

module.exports = router