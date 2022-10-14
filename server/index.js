require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require("./models/models")
const cors = require("cors")
const router = require("./routes/allRoutes")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const PORT = process.env.PORT

const app = express();
app.use(cors())
app.use(express.json())
app.use("/api", router)

//финальная обработка ошибок, у которой нет next
app.use(errorHandler)


app.get("/", (req, res) => {
  res.status(200).json({ message: "working!" })
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  }
  catch (e) {
    console.log(`ошибка: ${e}`)
  }
}

start()