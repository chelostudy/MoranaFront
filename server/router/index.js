const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');





router.post('/login', userController.login,
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),);
router.post('/logout', userController.logout);
router.post('/register_order', body('phone').isLength({min: 7, max: 20}), userController.registerOrder);
router.post('/registration', authMiddleware,
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.get('/refresh', userController.refresh);

router.post('/orders', authMiddleware, userController.getOrders);
router.post('/delete_order', authMiddleware, userController.deleteOrder)
router.post('/update_order_status', authMiddleware, userController.updateOrderStatus)
router.post('/update_prices', authMiddleware, userController.updateAllPrices)
router.post('/get_prices_by_cat', userController.getPricesByCategory)
router.get('/get_prices', userController.getPrices)



module.exports = router
