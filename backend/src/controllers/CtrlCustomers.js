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
        if(!name || !email || !password || !phone || !age ){
            return res.status(400).json({message: "Ingrese datos válidos"});
        }

        if(age > 18 || age < 100){
            return res.status(400).json({message: "Ingrese una edad válida"});
        }
        
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
        const deleteCustomer = await customersModel.findByIdAndDelete(req.params.id)
        if(!deleteCustomer){
            return res.status(400).json({message: "cannot delete customer"})
        }
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
        const updateCustomer = await customersModel.findByIdAndUpdate(req.params.id, {name, email, password, phone, age, isVerified}, {new: true})
        if(!updateCustomer){
            return res.status(400).json({message: "cannot update customer"})
        }

        res.json({message: "customer updated successfully"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)  
    }
  
}

export default customersController;