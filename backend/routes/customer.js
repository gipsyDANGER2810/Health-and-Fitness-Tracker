const express = require('express');
const router = express.Router()
const cors = require('cors');
const {getAllCustomer, getCustomer, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/customerController')


router.route("/").get(getAllCustomer)
router.route("/:id").get(getCustomer)
router.route("/").post(createCustomer)
router.route("/:id").put(updateCustomer)
router.route("/:id").delete(deleteCustomer)


module.exports = router
