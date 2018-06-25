require('dotenv').config();

const
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    ejsLayouts  = require('express-ejs-layouts'),
    mongoose = require('mongoose'),
    hostRouter = require('./router/hostRouter'),
    PORT = 3000;

app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.static('public'));
app.use(ejsLayouts);

// ROUTES
app.use('/hosts', hostRouter);

// app.get('/', (req, res) => {
//     res.render("home")
// })

mongoose.connect(process.env.DB_DEV, (err) => {
    console.log(err || "SUCCESSFULLY CONNECTED TO CRADLE")
})

app.listen(PORT, (err) => {
    console.log(err || `SERVER IS RUNNING ON ${PORT} :)`)
})



