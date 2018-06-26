const
    Hosts = require('../controllers/hosts'),
    express = require('express'),
    router = express.Router();

router.get('/', Hosts.showAll);
router.get('/new', Hosts.new);
router.post('/', Hosts.create);
router.get('/:id', Hosts.showHost);


module.exports = router;

//Declare a route for GET "/hosts/new" just above your GET "/hosts/:id". This route will render the new.ejs you created.

