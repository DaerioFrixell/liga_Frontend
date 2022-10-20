const ApiError = require("../error/ApiError")
const { Lead } = require("../models/models")

class LeadController {
  async create(req, res) {
    const { name, number, comment } = req.body
    const lead = await Lead.create({ name, number, comment })
    return res.json(lead)
  }

  async getAll(req, res) {
    const leads = await Lead.findAll()
    return res.json(leads)
  }
}

module.exports = new LeadController()