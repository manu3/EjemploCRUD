const controller = {}
const mysql = require('mysql')
const url = require('../routes/database')
const dbconnection = mysql.createConnection(url.urlMysql)


controller.listIntSimple = (req, res) => {
    dbconnection.query("SELECT * FROM interessimple", (error, results, fields) => {

        res.render("interessimple", {
            data: results
        })
    });
}

controller.ListIntCompuesto = (req, res) => {
    dbconnection.query("SELECT * FROM interescompuesto", (error, results, fields) => {

        res.render("interescompuesto", {
            data: results
        })
    });
}


controller.agregarSimple = (req, res) => {
    const data = req.body
    dbconnection.query('INSERT INTO interessimple set ?', [data], (err, results) => {
        res.redirect('/')
    })
}

controller.agregarCompuesto = (req, res) => {
    const data = req.body
    dbconnection.query('INSERT INTO interescompuesto set ?', [data], (err, results) => {
        res.redirect('/')
    })
}

module.exports = controller