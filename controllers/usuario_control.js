const {response} = require("express");


const usuariosGet = (req, res = response) =>{
    
    res.json({
        ok: true,
        msg:"metodo get - controlador"
    });

};


const usuariosPost =(req, res =response) =>{

    const {nombre, edad, apellido} = req.body;

    res.json({
        ok: true,
        msg:"metodo post -control",
        nombre,
        edad,apellido
    });
};


const usuariosPut = (req, res=response) =>{
    res.json({
        ok: true,
        msg:"metodo put"
    });
};


const usuariosDelete = (req, res = response) =>{
    res.json({
        ok: true,
        msg:"metodo delete"
    });
};




module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}