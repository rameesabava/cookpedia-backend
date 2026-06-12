const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadController = require('../controllers/downloadController')
const saveRecipeController = require('../controllers/saveRecipeController')

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

// download recipe
router.post('/recipes/:id/download',jwtMiddleware,downloadController.addToDownloadsController)

// save recipe
router.post('/recipes/:id/save',jwtMiddleware,saveRecipeController.saveRecipeToCollectionCotroller)

// get saved recipe
router.get('/recipes-save',jwtMiddleware,saveRecipeController.getRecipeFromCollectionCotroller)

// remove recipe from saved collection
router.delete('/recipes-save/:id',jwtMiddleware,saveRecipeController.removeRecipeFromCollectionCotroller)


// ----------role - Admin

module.exports = router