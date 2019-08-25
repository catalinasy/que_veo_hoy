var connection = require("../lib/conexionbd")

function devolver_generos(req, res){
    connection.query(
        "SELECT * FROM genero",
        function(err, response){
        if(err){
           return res.sendStatus(500).json("Ocurrio un error")
        };
        
        return res.json({generos: response})
        });
}

module.exports = devolver_generos;