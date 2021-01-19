import { Router } from 'express'
import * as cars from './cars.json'

const router = Router()

router.get('/', (req, res) => {
  res.json(cars)
})

export default router
