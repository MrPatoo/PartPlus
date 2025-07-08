/*fields:
    idCustomer, vehicle, service, status
*/

import { Schema, model } from "mongoose";

const reservesSchema = new Schema({
    idCustomer:{
        type: Schema.Types.ObjectId,
        ref: "Customers",
        require: true 
    },

    vehicle:{
        type: String,
        require: true,
    },

    service:{
        type: String,
        require: true,

    },

    status:{
        type: Boolean,
        require: true,
    },

    isVerified:{
        type: Boolean,
        require: true
    }
},{
    timestamps: true,
    strict: false
})

export default model("Reserves", reservesSchema);