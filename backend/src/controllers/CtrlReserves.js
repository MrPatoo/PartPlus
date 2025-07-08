const reservesController = {}

import reservesModel from "../models/Reserves.js"

//SELECT
reservesController.getReserves = async(req, res)=>{
    try {
        const reserves = await reservesModel.find().populate("idCustomer")
        if(!reserves){
            return res.status(404).json({message: "reserves not found"})
        }
        res.json(reserves)
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)
    }

}

//SELECT BY ID
reservesController.getReservesById = async(req, res) =>{
    try {
        const reserves = await reservesModel.findById(req.params.id)
        if(!reserves){
            return res.status(404).json({message: "reserve not found"})
        }
        res.json(reserves)
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)
    }
}

//INSERT
reservesController.postReserves = async(req, res)=>{
    try {
        const{idCustomer, vehicle, service, status, isVerified } = req.body;
        if( !idCustomer || !vehicle || !service || !status){
            return res.status(400).json({message: "Ingrese datos validos"});
        }
        const newReserve = new reservesModel({idCustomer, vehicle, service, status, isVerified})
        await newReserve.save()
        res.json({message: "reserve saved"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)
    }
}

//DELETE
reservesController.deleteReserve = async(req,res) =>{
    try {
        await reservesModel.findByIdAndDelete(req.params.id)

        res.json({message:"reserve deleted"})
    
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)
    }
}

//UPDATE    
reservesController.putReserves = async(req, res) =>{
    try {
        const{idCustomer, vehicle, service, status} = req.body;
        await reservesModel.findByIdAndUpdate(req.params.id, {idCustomer, vehicle, service, status}, {new:true})
        
        res.json({message:"reserve updated"})
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        console.log("error: " + error)  
    }
}

export default reservesController;