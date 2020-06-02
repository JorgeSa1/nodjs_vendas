//chamando modulos
const express = require('express')
const app = express()
const bp = require('body-parser')

//criando aplicativo


//configurando o parser
//app.use(bp.json({limit: '10mb'}));
//app.use(bp.urlencoded({extendend: false}))

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

//configurando o Frontend
app.set('view engine', 'ejs')
app.set('views', 'views')

//definindo arquivos estáticos
app.use(express.static('public'))

//chamando rotas
app.use('/', (req, res) => {
    return res.send('Ola velhos!')
})

//exportando aplicação
module.exports = app
