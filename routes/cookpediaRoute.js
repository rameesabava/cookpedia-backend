const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController = require('../controllers/userController')

const router = new express.Router()


// ------------------------Unauthorised Routes--------------
// get all recipes
router.get('/recipes',recipeController.getAllRecipes)
// add feedback
router.post('/feedbacks',feedbackController.addFeedbackController)
// get appoved feedbacks
router.get('/feedbacks/approved',feedbackController.getALlApprovedFeedbacksController)
// register
router.post('/register',userController.registerController)
// login
router.post('/login',userController.loginController)

// ------------Authorised Routes---------------

// -------------Role - user-----------------

// ----------role - Admin

module.exports = router