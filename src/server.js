import config from './_config'
import express from 'express'
import bodyParser from 'body-parser'
import httpervert from 'httpervert'
import init from 'shintech-init-db'
import helmet from 'helmet'
import path from 'path'
import morgan from 'morgan'
import winston from 'winston-color'
import favicon from 'serve-favicon'
import getRouter from './routes'

const _parentDir = path.dirname(__dirname)

const options = {
  app: express(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development',
  logger: winston,
  config: config
}

options.db = init(options)

const { app, environment } = options

app.use(helmet())

const server = httpervert(options)
const router = getRouter(options)

app.use(favicon(path.join(__dirname, 'resources', 'images', 'favicon.png')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/css', express.static(path.join(_parentDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(express.static(path.join(__dirname, 'static')))

if (environment !== 'test') {
  app.use(morgan('dev'))
}

app.use('/api', router)

const serverConfig = {
  server: server,
  options: options
}

export default serverConfig
