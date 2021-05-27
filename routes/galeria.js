/*
  Rutas de galerias
  host + /api/galeria
*/
const router = require('express').Router();
const {
  obtenerGalerias,
  obtenerGaleriasPorTipo,
  crearGaleria,
  actualizarGaleria,
  eliminarGaleria
} = require('../controllers/galeria');

const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { tipoValido } = require('../helpers/tipoValido');

router.get('/', obtenerGalerias);

router.get(
  '/:type',
  [
    check('type', 'El tipo es inválido (tipo válidos: Serie y Película)')
    .custom(tipoValido),
    validarCampos,
  ],
  obtenerGaleriasPorTipo
);

router.post(
  '/',
  [
    check('title', 'El título es obligatorio').notEmpty(),
    check('year', 'El año es obligatorio').notEmpty(),
    check('year', 'El año es inválido (Entre 1895 y 9999)').isFloat({
      min: 1895,
      max: 9999
    }),
    check('type', 'El tipo es obligatorio').notEmpty(),
    check('type', 'El tipo es inválido (tipo válidos: Serie y Película)')
    .custom(tipoValido),
    validarCampos,
  ],
  crearGaleria
);

router.put(
  '/:id',
  [
    check('title', 'El título es obligatorio').notEmpty(),
    check('year', 'El año es obligatorio').notEmpty(),
    check('year', 'El año es inválido (Entre 1895 y 9999)').isFloat({
      min: 1895,
      max: 9999
    }),
    check('type', 'El tipo es obligatorio').notEmpty(),
    check('type', 'El tipo es inválido (tipo válidos: Serie y Película)')
    .custom(tipoValido),
    validarCampos,
  ],
  actualizarGaleria
);

router.delete('/:id', eliminarGaleria);

module.exports = router;