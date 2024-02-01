const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'people'
};
const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(nome) values('Natã')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    let final_return = '<h1>Full Cycle Rocks!</h1>'
    const sql2 = `SELECT * FROM people`
    let people = []
    connection.query(sql2, function (err, results, fields) {
        people = results.map(item => item.nome)
        final_return += '<ul>'
        people.forEach(element => {
            final_return += '<li>' + element + '</li>'
        });
        final_return += '</ul>'
        res.send(final_return)
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})