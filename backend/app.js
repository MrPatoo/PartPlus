import express from "express"

import customersRoutes from "./src/routes/customersRoutes.js"

const app = express();

app.use(express.json());

app.use("/api/customers", customersRoutes); 


export default app;