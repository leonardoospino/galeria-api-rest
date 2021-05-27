const { request, response } = require('express');
const Galeria = require('../models/Galeria');

const obtenerGalerias = async (req = request, res = response) => {
  const galerias = await Galeria.find();
  console.log('obtener galerias: ');

  res.status(galerias.length === 0 ? 404 : 200).json({
    ok: true,
    galerias
  });
}

const obtenerGaleriasPorTipo = async (req = request, res = response) => {
  const { type } = req.params;
  const galerias = await Galeria.find({ type });

  res.status(galerias.length === 0 ? 404 : 200).json({
    ok: true,
    galerias
  });
}

const crearGaleria = async (req = request, res = response) => {
  try {
    const galeria = new Galeria(req.body);
    await galeria.save();

    res.status(201).json({
      ok: true,
      galeria
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Por favor comuníquese con el administrador'
    })
  }
}

const actualizarGaleria = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const galeria = await Galeria.findById(id);

    if (!galeria) {
      return res.status(404).json({
        ok: false,
        msg: 'La galería no existe'
      })
    }

    const galeriaActualizada = await Galeria.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.json({
      ok: true,
      galeria: galeriaActualizada
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Por favor comuníquese con el administrador'
    })
  }
}

const eliminarGaleria = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const galeria = await Galeria.findById(id);

    if (!galeria) {
      return res.status(404).json({
        ok: false,
        msg: 'La galería no existe'
      })
    }

    const galeriaELiminada = await Galeria.findByIdAndDelete(id);

    res.status(202).json({
      ok: true,
      galeria: galeriaELiminada
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Por favor comuníquese con el administrador'
    })
  }
}

module.exports = {
  obtenerGalerias,
  obtenerGaleriasPorTipo,
  crearGaleria,
  actualizarGaleria,
  eliminarGaleria
}