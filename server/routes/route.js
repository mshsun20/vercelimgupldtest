const express = require('express')
const router = express.Router()
// const AccController = require('../controllers/accController')



// Ping
router.route('/checkstat').get((req, res) => {
    res.json({message:`Server is Online...`, statuscode:200})
})
router.route('/checkcurr').get((req, res) => {
    res.json({message:`Server is OK...`, statuscode:220})
})


// GET
// router.route('/account/view').get(AccController.read)



// POST
// router.route('/account/add').post(AccController.create)



// PUT
// router.route('/account/edit/:id').put(AccController.update)



// DELETE
// router.route('/account/remove/:id').delete(AccController.delete)



module.exports = router