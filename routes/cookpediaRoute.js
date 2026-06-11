const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

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
// view recipe
router.get('/recipes/:id',jwtMiddleware, recipeController.viewRecipeController)

// get all related recipes
router.get('/recipes-related',jwtMiddleware,recipeController.getRelatedRecipesController)
// add feedback
// ----------role - Admin

module.exports = router