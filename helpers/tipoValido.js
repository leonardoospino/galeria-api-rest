const { types } = require('../types/types');


const tipoValido = (value) => {
  if (!value) return false;
  return (types.indexOf(value) > -1);
}

module.exports = {
  tipoValido
}