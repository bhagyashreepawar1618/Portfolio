import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

//config for express to understand browser encoder
app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);

//routes section
//routes import
import userRouter from "../src/routes/user.routes.js";
app.use("/api/v1/users", userRouter);

export default app;
