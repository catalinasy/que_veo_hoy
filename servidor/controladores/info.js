var connection = require("../lib/conexionbd");

function devolver_info(req, res){
    let id = req.params.id;
    let sql = "select * from pelicula where id = " + id

    connection.query(sql, function(err, response, rows){
         if(err){
             return res.sendStatus(404)
         }
        console.log(response[0])
        return res.json({ pelicula: response[0] });
        
    }
    )
}

module.exports = devolver_info;