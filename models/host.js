const mongoose = require('mongoose');

const HostSchema = new mongoose.Schema({
    name: String,
    gender: String
});

const Host = mongoose.model('Host', HostSchema);

module.exports = Host;