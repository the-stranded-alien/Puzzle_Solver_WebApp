const route = require('express').Router()

let tester = 'Puzzle - 1 From Routes'

route.get('/', (req, res) => res.send(tester))
route.post('/', (req, res) => {

})
route.get('/showAlgo', (req, res) => {
    res.send("Pseudo Code Will Be Shown Here.")
})

module.exports = route