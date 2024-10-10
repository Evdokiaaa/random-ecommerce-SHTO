import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: process.env.FRONTEND_SERVER,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

const connectToDb = async () => {
  const db = await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ecommerce.gnlt4.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce`
  );
  console.log("Success DB.");
};
connectToDb().catch((e) => console.log(e));

// app.use(cors()) Для всего

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app
  .listen(PORT, () => {
    console.log(`Сервер успешно запущен по адресу http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.error("Ошибка при запуске сервера:", error.message);
  });
