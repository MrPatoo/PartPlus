/*fields:
    name, email, password, phone, age
*/

import { Schema, model } from "mongoose";

const customersSchema = new Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true,
        unique: true,
        match:[
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/,
            "Por favor ingrese un correo electronico valido", //validar el correo electronico
        ],
    },

    password:{
        type: String,
        require: true,
        minlenght: 8 //para poner un minimo de caracteres
    },

    phone:{
        type: String,
        require: true,
        unique: true,
        match: [/^[0-9]{8}$/, "el numero de teléfono tiene que ser válido"] //validar número de teléfono, ejemplo: 12345678
    },

    age:{
        type: Number,
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

export default model("Customers", customersSchema);