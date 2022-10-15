const ApiError = require("../error/ApiError")
const { Feedback } = require("../models/models")

class FeedbackController {
  async create(req, res) {
    const { author, description } = req.body
    const feedback = await Feedback.create({ author, description })
    return res.json(feedback)
  }

  async getAll(req, res) {
    const feedbacks = await Feedback.findAll()
    return res.json(feedbacks)
  }
}

module.exports = new FeedbackController()