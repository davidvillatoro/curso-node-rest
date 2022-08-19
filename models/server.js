const express = require('express');
const  cors = require('cors');

class Server{

    constructor ( ){

        this.app = express();
        this.port = process.env.PORT;
        //rutas del server
        this.rutasPath = "/api/usuarios";
        this.middlewares();
        this.rutas();
    }

    middlewares(){
        //cors comunicacin entre apis
        this.app.use( cors());
        //lectura y parseo del body 
        this.app.use(express.json())

        this.app.use( express.static('public'));
    };


    rutas(){

       this.app.use(this.rutasPath , require('../routes/usuarios_rutas'))
    };


    listen(){
        
        this.app.listen( this.port, ()=>{
                console.log(`el servidor se esta ejecutando en el puerto ` + this.port);
         });  
    };


}


module.exports = Server;