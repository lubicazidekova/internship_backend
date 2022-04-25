
import config from 'config'
import http from "http"
import app from './app'
import sequelize from "./db"
import {PatientModel} from "./db/models/patients";

import {workflow} from './api/v1/patients/get.patients'
import {toString} from "lodash";

const httpServer = http.createServer(app)
const serverConfig: { port: number } = config.get('server')
sequelize.sync();
app.get('/', async (req, res) => {
    res.send('Hello world !')
    console.log('Hello world !')
    console.log('docker exec -it internship_postgres /bin/bash')
})

httpServer.listen(serverConfig.port).on('listening', () => {
    console.log(`Server started at port ${serverConfig.port}`)
})
