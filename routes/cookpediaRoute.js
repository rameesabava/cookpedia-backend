const express = require('express')
const recipeController = require('../controllers/recipeController')

const router = new express.Router()


// ------------------------Unauthorised Routes--------------
// get all recipes
router.get('/recipes',recipeController.getAllRecipes)

// ------------Authorised Routes---------------

// -------------Role - user-----------------

// ----------role - Admin

module.exports = router