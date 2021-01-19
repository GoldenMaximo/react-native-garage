import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import router from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/assets', express.static('./assets'))

app.use(router)

export default app
