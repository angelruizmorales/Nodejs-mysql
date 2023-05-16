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
conexion.query('select * from ingredientes', function(error, filas){
    if(error){
        throw error;
    }else{
        filas.forEach(filas => {
            console.log(filas)
        });
    } 
});

conexion.query('insert into ingredientes (ingredientes) values ("huevo")', function(error, results){
    if(error) throw error;
    console.log('Insert ok', results);
});

conexion.end();
