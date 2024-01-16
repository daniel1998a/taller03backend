import {PerroMasc} from "../modelos/PerroMascModelo.js";

const crear = (req,res)=>{
    if(!req.body.nombre){
        res.status(400).json({

            mensaje: "Nombre no debe estar vacio"
        });
        return;
    }
    const dataset={
        nombre: req.body.nombre,
        edad: req.body.edad,
        razaPe: req.body.razaPe,
    };

    PerroMasc.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje:"Registro creado Exitosamente"
        })
    }).catch((err)=>{
        res.status(500).json({
            tipo:"error",
           mensaje: `Error al crear el registro ::: ${err}`
        })       
    })
};

const actualizar =(req,res)=>{
    const id= req.params.id;
    if(!req.body.nombre && !req.body.edad && !req.body.razaPe){
        res.status(500).json({
            mensaje:  `no se ecuentraron Datos para actualizar`
        });
        return;
    }
    else{
        const nombre= req.body.nombre;
        const edad=req.body.edad;
        const razaPe=req.body.razaPe
        PerroMasc.update({nombre,edad,razaPe},{where:{id}})
        .then((resultado)=>{
            res.status(200).json({
                tipo:"success",
                mensaje: `Registro Actualizado`
            });
        })
        .catch((err)=>{
            res.status(500).json({
                tipo:"error",
                mensaje:  `error a actualizar::: ${err}`
            });
        })    
    }
};

const buscar = (req,res)=>{
    PerroMasc.findAll().then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:  `No se econtraron resgistro ::: ${err}`
        });
    });
};

const eliminar=(req,res)=>{
    const id= req.params.id;
    if(id == null){
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }
    PerroMasc.destroy({where:{id}})
    .then((resultado)=>{
        res.status(200).json({
            tipo:"error",
            mensaje: `el dato eliminado`
        });
    })
    .catch((err)=>{
        res.status(500).json({
            mensaje: `Error al eliminar registro  ::: ${err}`
        });
    })
    

};

const buscarId =(req,res)=>{
    const id = req.params.id;
    if(id==null){
        res.status(203).json({
            mensaje:  `El id esta vacio`
        });
        return
    }

    PerroMasc.findByPk(id).then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:  `Registro no se encontro ::: ${err}`
        });
    });
}

export {crear,buscarId,buscar,actualizar,eliminar}