import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import kidsRoutes from "./Router/kidsrouter.js";
import Stationroute from "./Router/StationaryRouter.js";
import Toys from "./Router/ToysRouter.js";
import homeroute from "./Router/HomeRouter.js";
import contactroute from "./Router/ContactRouter.js";
const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://vinaydraj14:JdA2oIQvtVs98THI@cluster0.uw8zzok.mongodb.net/MERNPRO?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/home", homeroute); 
app.use("/api/kids", kidsRoutes);        
app.use("/api/toys",Toys);
app.use("/api/stationary",Stationroute);
app.use("/api/contact", contactroute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
