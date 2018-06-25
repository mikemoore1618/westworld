const Host = require('../models/host');

exports.showAll = (req, res) => {
    Host.find({}, (err, hosts) => {
        if (err) {
            res.render('Hosts', { status: 'FAIL', payload: err });
        } else {
            res.render('Hosts', { status: 'SUCCESS', payload: hosts })
        }
    })
};

