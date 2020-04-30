//include express and create a router
const express = require('express');
const router = express.Router();

//include questions controller
const questionController = require('../../../controllers/api/v1/questions_controller');


router.post('/create',questionController.addQuestion);
router.post('/:id/options/create', questionController.addOption);
router.get('/:id', questionController.viewQuestion);
router.delete('/:id/delete', questionController.deleteQuestion);

//export router
module.exports = router;