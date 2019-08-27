const express = require('express');

const srv = express()

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/', express.static(__dirname + "/home"))

const puzzle1Route = require('./routes/puzzle1')
const puzzle2Route = require('./routes/puzzle2')
const puzzle3Route = require('./routes/puzzle3')
const puzzle4Route = require('./routes/puzzle4')
const puzzle5Route = require('./routes/puzzle5')

srv.use('/puzzle1', puzzle1Route)
srv.use('/puzzle2', puzzle2Route)
srv.use('/puzzle3', puzzle3Route)
srv.use('/puzzle4', puzzle4Route)
srv.use('/puzzle5', puzzle5Route)

srv.use('/algorithms', express.static(__dirname + "/algorithms"))
srv.use('/puzzles', express.static(__dirname + "/puzzles"))

srv.listen(1616, () => {
    console.log('Server Started On http://localhost:1616')
})

