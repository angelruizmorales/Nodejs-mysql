var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'localhost',
    database:'prueba',
    user:'root',
    password:''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion exitosa');
    }
});

conexion.query('insert into ingredientes (ingredientes) values ("huevo")', function(error, results){
    if(error) throw error;
    console.log('Insert ok', results);
});

conexion.end();