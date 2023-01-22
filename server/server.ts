import * as jsonServer from 'json-server'
import * as auth from 'json-server-auth'
import express from'express'
import path from 'path'

const server = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();

server.use(router)
server.use(middlewares)
server.use(auth)
server.listen(5000, () => console.log('Server is running'))