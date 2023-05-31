const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/register_order', userController.registerOrder);
router.post('/registration', userController.registration);
router.get('/refresh', userController.refresh);
router.get('/users');


module.exports = router
