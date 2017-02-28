var express = require('express');
var app = express();
var mysql = require('mysql');


var connection = mysql.createConnection({
    //properties
    host: '192.168.48.241',
    user: 'schwebbe',
    password: 'roflcopter',
    database: 'sampleDB'
});




app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.send('index.html');
});


app.get('/customers', function (req, res) {
    console.log('I recieved a GET request')
    connection.query("SELECT * FROM customers", function (error, rows, fields) {
      
        //callback
        if (!error) {
            console.log('Successful query', rows);
            res.send(JSON.stringify(rows));
        } else {
            console.log('Error while performing Query');
            //parse with your rows/fields 
            
        }
        connection.end();


    });

});

app.post('/customers')

app.listen(3000);
console.log("Server running on port 3000");