var connection = require("../lib/conexionbd");


function devolver_peliculas(req, res) {
  condition = "";
  where = [];
  if (req.query.titulo != undefined) {
    condition = " titulo like '%" + req.query.titulo + "%'";
    where.push(condition);
  }
  // if(req.query.titulo == undefined){
  //   condition = ""
  // }
  if (req.query.genero != undefined) {
    condition = " genero_id = " + req.query.genero;
    where.push(condition);
  }
  if (req.query.anio != undefined) {
    condition = " anio = " + req.query.anio;
    where.push(condition);
  }
  if (where.length > 0) {
    condition = " where ";
    for (var i = 0; i < where.length; i++) {
      if (i > 0) {
        condition += " and ";
      }
      condition += where[i];
    }
  }
  condition += " order by " + req.query.columna_orden + " " + req.query.tipo_orden
  var limit = " limit " + req.query.cantidad;
  var offset = " offset " + ((req.query.pagina -1) * req.query.cantidad)


  connection.query("SELECT Count(*) as total from pelicula" + condition, function(
    err,
    response,
    rows
  ) {
    if (err) {
      return res.sendStatus(500).json("Ocurrio un error");
    }
    var cantidad = response[0].total;
    
    connection.query("SELECT * from pelicula" + condition + limit + offset, function(
      err,
      response,
      rows
    ) {
      if (err) {
        return res.sendStatus(500).json("Ocurrio un error");
      }
      return res.json({ peliculas: response, total: cantidad });
    });
  });
}

module.exports = devolver_peliculas;
