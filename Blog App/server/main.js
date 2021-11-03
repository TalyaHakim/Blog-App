const express = require('express');
const cors = require('cors');
const app = express();
const usersModule = require('./blog');
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req,res) => {
    usersModule.readAll().then(data => {
        res.send(data)
    })
})

app.post('/', (req,res) => {
    usersModule.addUser(req.body).then(data => console.log(data))
})

app.put('/', (req,res) => {
    usersModule.updateUser(req.body.id, req.body.prop, req.body.val).then(data => res.send(data));
})

app.delete('/:id', (req,res) => {
    usersModule.deleteUser(req.params.id).then(data => console.log(data))
})

app.listen(3000);