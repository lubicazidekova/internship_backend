
import config from 'config'
import http from "http"
import app from './app'
import sequelize from "./db"

//import {workflow} from './api/v1/patients/get.patients'

const httpServer = http.createServer(app)
const serverConfig: { port: number } = config.get('server')

app.get('/', async (req, res) => {
    res.send('Hello world !')
    console.log('Hello world !')
    console.log(req.body.workflow)

})

httpServer.listen(serverConfig.port).on('listening', () => {
    console.log(`Server started at port ${serverConfig.port}`)
})
sequelize.sync();