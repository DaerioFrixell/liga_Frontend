const Router = require("express")
const router = new Router()
const userRouter = require("./userRoutes")
const feedbackRouter = require("./feedbackRouter")
const leadRouter = require("./leadRouter")


router.use("/user", userRouter)
router.use("/feedback", feedbackRouter)
router.use("/lead", leadRouter)

module.exports = router