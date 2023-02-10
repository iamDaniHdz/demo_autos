const express = require('express')
const router = express.Router()
const { getAutos, setAutos, updateAuto, deleteAuto } = require('../controllers/autosController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAutos).post(protect, setAutos)
router.route('/:id').delete(protect, deleteAuto).put(protect, updateAuto)

module.exports = router