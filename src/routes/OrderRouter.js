const express = require("express")
const router = express.Router()
const OrderController = require('../controllers/OrderController')
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware")

router.post('/create', authUserMiddleWare, OrderController.createOrder)
router.get('/get-order-details/:id',authUserMiddleWare, OrderController.getOrderDetails)
router.get('/get-details-order/:id',authUserMiddleWare, OrderController.getDetailsOrder)
router.get('/get-details-order-admin/:id', authMiddleWare, OrderController.getDetailsOrder)
router.put('/update/:id', authMiddleWare, OrderController.updateOrder)
router.delete('/cancel-order/:id',authUserMiddleWare, OrderController.cancelOrderDetails)
router.get('/get-all-order', OrderController.getAllOrder)


module.exports = router