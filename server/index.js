const express = require ('express')
const app = express()
const ctrl = require('./controllers/messages_controller')

app.use(express.json())

const SERVER_PORT = 3001

app.use(express.static(__dirname + '/../public/build'));
//controleres 

app.get('/api/messages',ctrl.read)
app.post('/api/messages',ctrl.create)
app.put('/api/messages/:id',ctrl.update)
app.delete('/api/messages/:id',ctrl.delete)

app.listen(SERVER_PORT, ()=>console.log(`Server is runing on ${SERVER_PORT}`))