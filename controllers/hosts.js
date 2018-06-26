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

exports.new = (req, res) => {
    res.render('New')
};

exports.create = (req, res) => {
    Host.create(req.body, (err, newHost) => {
        if(err) return console.log(err)
        res.redirect("/hosts")
    })
};


exports.showHost = (req,res) => {
    Host.findById(req.params.id, (err, hostFromDB) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Show', { status: "SUCCESS", payload: hostFromDB})
        }
    })
}




// app.patch("/users/:id", (req, res) => {
//     User.update({_id: req.params.id}, {$set: req.body}, (err) => {
//         if (err) return console.log(err);
//         res.json({ message: "succesfully saved"})
//       })
// })

// app.post("/users", (req, res) => {
//   User.create(req.body, (err, brandNewUser) => {
//     if(err) return console.log(err)
//     res.json({ message: "user created.", user: brandNewUser })
//   })
// })

// app.delete('/users/:id', (req, res) => {
//     User.deleteOne({ _id: req.params.id }, (err) => {
//         if (err) return console.log(err);
//         res.json({ success: true, message:"Byeeeeeeee 😅" })
//       });
// })
