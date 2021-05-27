const { Schema, model } = require('mongoose');

const GaleriaSchema = Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

GaleriaSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
})

module.exports = model('Galeria', GaleriaSchema);