'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean',(err, res) =>{
  if (err) {
    throw err;
  }
  else {
    console.log("BD BIEN TODO PRRO...");
    app.listen(port, function() {
      console.log("Servidor del api rest musica escuchando en http://localhost:"+port);
    })
  }
});
