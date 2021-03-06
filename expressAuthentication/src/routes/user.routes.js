const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller');
const { checkToken } = require('../middlewares/auth.middleware')

router.route('')
  .post(userController.createUser)
  .get(checkToken, userController.getUsers)
  .put(checkToken, userController.updateUser)
router.route('/:id')
  .get(checkToken, userController.getUserByUserId)
  .delete(checkToken, userController.deleteUser)
router.route('/login')
  .post(userController.login)



module.exports = router;
