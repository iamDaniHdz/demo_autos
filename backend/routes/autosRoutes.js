const express = require('express')
const router = express.Router()
const { getAutos, setAutos, updateAuto, deleteAuto } = require('../controllers/autosController')

router.route('/').get(getAutos).post(setAutos)
router.route('/:id').delete(deleteAuto).put(updateAuto)

module.exports = router