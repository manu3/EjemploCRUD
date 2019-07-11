

const express = require('express')
const router = express.Router() // te devuelve un objeto de js en la cual se puede ir agregando rutas

const admin = require('../admin/admin')

router.get('/interesSimple', admin.listIntSimple)
router.post('/addIntSimple', admin.agregarSimple) // escucha un nueva ruta del metodo post
router.get('/interesCompuesto', admin.listIntSimple)
router.post('/addIntCompuesto', admin.agregarSimple)
module.exports = router

