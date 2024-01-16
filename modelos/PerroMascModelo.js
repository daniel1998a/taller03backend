import Sequelize  from "sequelize";
import { db } from "../database/conexion.js";

const  PerroMasc = db.define("PerroMasc",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    razaPe:{
        type: Sequelize.STRING,
        allowNull: true
    },
    
});

export {PerroMasc}