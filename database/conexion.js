import Sequelize from "sequelize";

const db = new Sequelize("adopPyG","Perros","Perros123",{
    dialect: "mysql",
    host: "localhost"
});

export {db}