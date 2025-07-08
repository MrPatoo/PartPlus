import express from "express"

import customersRoutes from "./src/routes/customersRoutes.js"
import reservesRoutes from "./src/routes/reservesRoutes.js"

const app = express();

app.use(express.json());

app.use("/api/customers", customersRoutes); 
app.use("/api/reserves", reservesRoutes);


export default app;