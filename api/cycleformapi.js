const express = require('express');
const app = express();
const router = express.Router();
const formrouter = express.Router();
const Bookingdatas = require('../models/cycleform');

formrouter.route('/bookingdetails').post(function (req, res) {
    let formsdatas = new Bookingdatas(req.body);

    formsdatas.save()
        .then(formsdatas => {
            res.status(200).json({ 'messages': 'userdetails  added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
router.route('/getbookingdetails').get(function (req, res) {
    let newUser = new Bookingdatas();
    newUser.find(function (err, newUser) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(newUseres);
        }
    });
});

// router.route('/edit/:id').get(function (req, res) {
// 	let id = req.params.id;
// 	User.findById(id, function (err, newUser) {
// 		res.json(newUser);
// 	});
// });

// router.route('/update/:id').post(function (req, res) {
// 	User.findById(req.params.id, function (err, newUser) {
// 		if (!newUser) {
// 			res.send('error');
// 		}
// 		else {
// 			newUser.name = req.body.name;
// 			newUser.email = req.body.email;
// 			newUser.mobilenumber = req.body.mobilenumber;

// 			newUser.save().then(newUser => {
// 				res.json('Update complete');
// 			})
// 				.catch(err => {
// 					res.status(400).send("unable to update the database");
// 				});
// 		}
// 	});
// });

// router.route('/delete/:id').get(function (req, res) {
// 	User.findByIdAndRemove({ _id: req.params.id }, function (err, newUser) {
// 		if (err) res.json(err);
// 		else res.json('Successfully removed');
// 	});
// });


module.exports = formrouter;