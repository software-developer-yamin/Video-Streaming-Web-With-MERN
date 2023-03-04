import express, { Express } from "express";
import { config } from "dotenv";
import { connectDatabase } from "./config/database";
import errorHandler from "./middlewares/errorHandler.middleware";
import createHttpError from "http-errors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app: Express = express();

// middlewares configuration
app.use(express.json());
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

// configuration routes
app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href="#">here</a> to visit frontend.</h1>`
  )
);

// error handlers
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use(errorHandler);

// database connection
connectDatabase();


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
