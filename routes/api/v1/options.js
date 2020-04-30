//include express and create a router
const express = require('express');
const router = express.Router();

//include questions controller
const optionsController = require('../../../controllers/api/v1/options_controller');

router.post('/:id/add_vote', optionsController.addVote);
router.delete('/:id/delete', optionsController.deleteOption);

//export router
module.exports = router;