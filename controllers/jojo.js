const express = require('express');
const router = express.Router();

// model
const Commssions = require('../models/commission.js');
const emote_seed = require('../models/seed.js');
const Commissions = require('../models/commission.js');
const { on } = require('../models/commission.js');

router.get('/', (req, res) => {
    Commissions.find({}, (err, foundCommissions) => {
        res.json(foundCommissions)
    })
})

router.get('/seed', (req, res) => {
    Commissions.create(emote_seed, (err, data) => {
        if (err) console.log(err.message)
        console.log('added provided data')
    })
})

router.get('/:id', (req, res) => {
    Commissions.findById(req.params.id, (err, foundCommission) => {
        res.json(foundCommission);
    })
})

router.post('/', (req, res) => {
    Commissions.create(req.body, (err, createdCommission) => {
        res.json(createdCommission);
    })
})

router.delete('/:id', (req, res) => {
    Commissions.findByIdAndDelete(req.params.id, (err, deletedCommission) => {
        res.json(deletedCommission);
    })
})

// Commissions.create(emote_seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided data')
// })

Commissions.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} commissions in this database`)
  })

// router.put('/:id', (req, res) => {
//     Commissions.findByIdAndUpdate(req.params.id, req.body, (err, updatedCommission) => {
//         res.json(updatedCommission);
//     })
// })


module.exports = router;