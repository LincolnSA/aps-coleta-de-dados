import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router";

const server = express();
const port = process.env.PORT || 3000;

server.use(cors());

server.use(express.json());
server.use(router);

server.listen(port, () => console.log(`http://localhost:${port}`));
