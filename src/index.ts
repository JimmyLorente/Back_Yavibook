import dotenv from 'dotenv'
dotenv.config();

import express from "express"
import cors from "cors"
import jwt from "jsonwebtoken"
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";


import { dbBook } from "./data/database";
dbBook();

import booksRouter from "./routers/books.router";
import usuariosRouter from "./routers/usuarios.router";
import swaggerSpec from './swagger';


const app = express();
app.use(express.json());
app.use(cors({
}));

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));

//rutas
app.use("/libros", booksRouter);
app.use("/usuarios", usuariosRouter);


const port = 3200;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
})