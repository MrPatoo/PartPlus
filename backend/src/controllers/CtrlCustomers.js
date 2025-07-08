const customersController = {};

import customersModel from "../models/Customers.js";

//SELECT
customersController.getCustomers = async(req, res) =>{
    const customers = await customersModel.find();

    res.json(customers)
}

customersController.getCustomersById = async(req, res) =>{
    const customers = await customersModel.findById(req.params.id);

    res.json(customers)
}

//INSERT
customersController.postCustomers = async(req, res) =>{
    const{name, email, password, phone, age, isVerified } = req.body;
    const newCustomer = new customersModel({name, email, password, phone, age, isVerified})
    await newCustomer.save()

    res.json({message: "customer saved"})
}

//DELETE
customersController.deleteCustomers = async(req,res) =>{
    await customersModel.findByIdAndDelete(req.params.id)

    res.json({message: "customer deleted"})
}

//UPDATE
customersController.putCustomers = async(req, res)=>{
    const{name, email, password, phone, age, isVerified } = req.body;
    await customersModel.findByIdAndUpdate(req.params.id, {name, email, password, phone, age, isVerified}, {new: true})

    res.json({message: "customer updated successfully"})
}

export default customersController;