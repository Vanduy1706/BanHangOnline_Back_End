const express = require("express")
const router = express.Router()
const userController = require('../controllers/UserController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware")

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/login/google', userController.loginWithGoogle)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id', authUserMiddleWare, userController.updateUser)
router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser)
router.get('/getAll', authMiddleWare, userController.getAllUser)//không chạy được getall authMiddleWare nếu xóa thì chạy đc
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailsUser)//không chạy được get details authMiddleWare nếu xóa thì chạy đc
router.post('/refresh-token', userController.refreshToken)
router.post('/delete-many', authMiddleWare, userController.deleteMany)

module.exports = router