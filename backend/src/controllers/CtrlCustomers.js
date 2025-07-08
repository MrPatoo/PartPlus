const customersController = {};

import customersModel from "../models/Customers.js";

//SELECT
customersController.getCustomers = async(req, res) =>{

    try {
        const customers = await customersModel.find();
        if(!customers){
            return res.status(404).json({message: "customer not found"})
        }
        res.json(customers)
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)
    }

}

customersController.getCustomersById = async(req, res) =>{
try {
    const customers = await customersModel.findById(req.params.id);
    if(!customers){
        return res.status(404).json({message: "customer not found"})
    }
    res.json(customers)
} catch (error) {
    res.status(500).json({message: "internal server error"})
    console.log("error: " + error)
}
}

//INSERT
customersController.postCustomers = async(req, res) =>{
    try {
        const{name, email, password, phone, age, isVerified } = req.body;
        const newCustomer = new customersModel({name, email, password, phone, age, isVerified})
        await newCustomer.save()
        res.json({message: "customer saved"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)
    }

}

//DELETE
customersController.deleteCustomers = async(req,res) =>{
    try {
        await customersModel.findByIdAndDelete(req.params.id)

        res.json({message: "customer deleted"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)
    }

}

//UPDATE
customersController.putCustomers = async(req, res)=>{
    try {
        const{name, email, password, phone, age, isVerified } = req.body;
        await customersModel.findByIdAndUpdate(req.params.id, {name, email, password, phone, age, isVerified}, {new: true})
    
        res.json({message: "customer updated successfully"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)  
    }
  
}

export default customersController;