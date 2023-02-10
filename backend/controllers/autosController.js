const asyncHandler = require('express-async-handler')

const Auto = require('../models/autosModel')

const getAutos = asyncHandler(async (req, res) => {
    const autos = await Auto.find()

    res.status(200).json(autos)
})

const setAutos = asyncHandler(async (req, res) => {
    if(!req.body.marca){
        res.status(400)
        throw new Error('Por favor teclea la marca del auto')
    }

    if(!req.body.modelo){
        res.status(400)
        throw new Error('Por favor teclea el modelo del auto')
    }

    if(!req.body.año){
        res.status(400)
        throw new Error('Por favor teclea el año del auto')
    }

    if(!req.body.color){
        res.status(400)
        throw new Error('Por favor teclea el color del auto')
    }

    const auto = await Auto.create({
        marca: req.body.marca,
        modelo: req.body.modelo,
        año: req.body.año,
        color: req.body.color
    })

    res.status(201).json(auto)
})

const updateAuto = asyncHandler(async (req, res) => {

    const auto = await Auto.findById(req.params.id)

    if (!auto) {
        res.status(400)
        throw new Error('Auto no encontrada')
    }

    const updatedAuto = await Auto.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json({ message: `Auto ${req.params.id} actualizado`})
})

const deleteAuto = asyncHandler(async (req, res) => {

    const auto = await Auto.findById(req.params.id)

    if (!auto) {
        res.status(400)
        throw new Error('Auto no encontrado')
    }

    await auto.remove()

    res.status(200).json({ message: `Auto ${req.params.id} borrado`})
})

module.exports = {
    getAutos,
    setAutos,
    updateAuto,
    deleteAuto
}