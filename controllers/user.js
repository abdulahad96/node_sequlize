const user = require('../models').user;

module.exports = {
    create(req, res) {
        return user.create({
            first_name: req.body.first_name,
            email: req.body.email,
            last_name: req.body.first_name,
            full_name: req.body.full_name,
            password: req.body.password,
            profile_img: req.body.profile_img
        })
        .then(user => res.status(201).send(user))
        .catch(error => {
            console.log(error,'kkkkkkkkkkkkkkkkkkk');
            // res.status(400).send(error)
        });
    }
};