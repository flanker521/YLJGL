/**
 * Created by xuwei on 2016/5/30.
 */
var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();

app.use('/main', express.static('Manager'));


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

var sqlite3Db;
//测试
app.get('/index', function (req, res) {
    sqlite3Db = new sqlite3.Database('./db/db.db');
    sqlite3Db.all("select * from device ", function (err, rows) {
        res.json(rows);
        closeDb();
    });
});

function closeDb() {
    console.log("closeDb");
    sqlite3Db.close();
}