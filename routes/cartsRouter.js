import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ pets })
})

router.post('/',upload, (req, res) => {
    const pet = req.body
    pets.push(pet)
    res.status(200).json({message:'Pets agregado con exito',pet})
})

export default router