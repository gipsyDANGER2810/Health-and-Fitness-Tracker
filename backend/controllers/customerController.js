const asyncHandler = require("express-async-handler")
const Customer = require("../models/Customer")


//@desc Get all Customer
//@ route GET api/cutomer"
//@access public
const getAllCustomer = asyncHandler(async (req, res) => {
    const customers = await Customer.find()
    res.status(200).json(customers)
})

//@desc Get Customer
//@ route GET api/customer/:id"
//@access public
const getCustomer = asyncHandler(async(req, res) => {
    const customers = await Customer.findById(req.params.id)
    if (!customers){
        res.status(404)
        throw new Error("Contact Not Found")
    }
        res.status(200).json(customers)
    
   
})

//@desc Create New Customer
//@ route POST api/customer"
//@access public
const createCustomer = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("All Fields are mandotary")
    }

    const customers = await Customer.create({
        name,
        email,
        password
    })
    res.status(201).json(customers)
})

//@desc Update Customer
//@ route PUT api/customer/:id"
//@access public
const updateCustomer = asyncHandler(async(req, res) => {
    const customers = await Customer.findById(req.params.id)
    if (!customers){
        res.status(404)
        throw new Error("Contact Not Found")
    }
    const updatedCustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedCustomer)
})

//@desc Delete Customer
//@ route DELETE api/customer/:id"
//@access public
const deleteCustomer = asyncHandler(async (req, res) => {
    const customers = await Customer.findByIdAndDelete(req.params.id)
    if (!customers){
        res.status(404)
        throw new Error("Contact Not Found")
    }
    
    res.status(200).json({ message: `Delete Customer ${req.params.id}` })
})

module.exports = { getAllCustomer, getCustomer, createCustomer, updateCustomer, deleteCustomer }