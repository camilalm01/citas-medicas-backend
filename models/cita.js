var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CitaSchema = new Schema({
	cedulaPaciente: String,
	detalles: String,
	hora: String,
	fechaRegistro: Date,
	fechaCita: Date,
})

module.exports = mongoose.model('Cita', CitaSchema)
