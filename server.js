var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');



// Variable Connection to MySQL and My Raspberry Pi
var connection = mysql.createConnection({
    host: '192.168.48.241',
    user: 'schwebbe',
    password: 'roflcopter',
    database: 'sampleDB'
});


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('index.html');
});


app.get('/todotable', function (req, res) {
    console.log('I recieved a GET request')

    connection.query("SELECT * FROM todotable", function (error, rows, fields) {

        //callback
        if (!error) {
            console.log('Successful query');
            res.send(JSON.stringify(rows));

        } else {
            console.log('Error while performing Query');
            //parse with your rows/fields  
        }

    });
    //connection.end();
});
app.post('/addData', function (req, res) {
    console.log(req.body.title);
    connection.query("INSERT INTO todotable (title, text) VALUES('" + req.body.title + "','" + req.body.text + "')", function (error, rows, fields) {
        if (!error) {
            console.log(req.body.text + " updated")
        } else
            console.log("Fack" + error);
    });
    console.log(res[0]);
    res.end();
})

app.get('/delData', function (req, res) {
    console.log(req.query.id);
    connection.query("DELETE FROM todotable WHERE id=" + req.query.id, function (error, rows, fields) {
        if (!error) {
            console.log(req.query.id + " updated")
        } else
            console.log("kalops" + error);
    });
    console.log(res[0]);
    res.end();
})

app.get('/editData', function (req, res) {
    console.log(req.body.title);
    connection.query("UPDATE todotable SET Title='" + req.query.title + "', Text='"+ req.query.text +"'  where id=" + req.query.id, function(error, rows, fields) {
        if (!error) {
            console.log(req.body.text + " updated")
        } else
            console.log("Fack" + error);
    });
})
/*app.get('/editData', function (req, res) {
    console.log(req.query.id);
    console.log(req.query.title);
    console.log(req.query.text);
    connection.query("UPDATE todotable SET title='"+req.query.title+"' WHERE id=, function (error, rows, fields) {
        if (!error) {
            console.log(req.query.id + " updated")
        } else
            console.log("kalops" + error);
    });
    console.log(res[0]);
    res.end();
}) */




app.listen(3000);
console.log("server is running on port 3000");