const
    Hosts = require('../controllers/hosts'),
    express = require('express'),
    router = express.Router();

router.get('/', Hosts.showAll);

module.exports = router;

