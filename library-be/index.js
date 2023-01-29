const express = require('express')
const app = express()
app.use(express.json())

//cors
const cors = require('cors')
app.use(cors())

const PORT = 5000

// Sequelize synchronous -- adhoc
/* const Sequelize = require('sequelize')
const Models = require('./models')
Models.sequelize.sync({
    force: false,
    alter: true,
    logging: console.log
}).then(function () {
    console.log('Database is synchronized')
}).catch(function (err) {
    console.log(err, 'Something went wrong with Database Update!')
}) */

app.get('/', (req, res) => {
    res.status(200).send('API is running')
})

// import router
const { adminRouter, userRouter } = require('./router')
app.use('/admin', adminRouter)
app.use('/user', userRouter)

app.listen(PORT, () => console.log('API is running on PORT ' + PORT))