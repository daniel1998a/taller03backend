import express from "express";
import {crear,buscarId,buscar,actualizar,eliminar} from "../controladores/PerroMascController.js";
const  routerPerrosM = express.Router();

routerPerrosM.get("/",(req,res) =>{
    res.send("Bienvenidos");
})
;
routerPerrosM.post("/crear",(req,res) =>{
    crear(req,res)
});

routerPerrosM.put("/actualizar/:id",(req,res) =>{
    actualizar(req,res);
});

routerPerrosM.get("/buscar",(req,res)=>{
    buscar(req,res)
});

routerPerrosM.delete("/eliminar/:id",(req,res) =>{
 
    eliminar(req,res);
});

routerPerrosM.get("/buscar/:id",(req,res)=>{
    buscarId(req,res)
});

export {routerPerrosM};