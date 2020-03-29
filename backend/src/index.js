const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app =  express()

app.use(cors())
app.use(express.json()) // Usar antes das rotas. diz para o body converter tudo em json para Js
app.use(routes)


app.listen(3333)