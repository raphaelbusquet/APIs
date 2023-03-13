const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000')

//middleware
//app.use(express.json()); // para o body da requisição no verbo POST

// app.route('/').get((req, res) => res.send('Página Inicial'));
// app.route('/sobre').get((req, res) => res.send('Página Sobre'));
// app.route('/').post((req, res) => res.send(req.body))

// let author = "Raphael Busquet"

app.route('/').get((req, res) => {
    axios.get(`https://api.github.com/users/raphaelbusquet`)
    .then(result => res.send(`<img src="${result.data.avatar_url}" alt="${result.data.name}" />`))

    .catch(err => console.error(err))

        
})




