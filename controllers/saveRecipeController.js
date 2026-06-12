const saveRecipes = require('../models/saveRecipeModel')

// add recipe to collection
exports.saveRecipeToCollectionCotroller = async (req, res) => {
    console.log("Inside saveRecipeToCollectionCotroller");
    const { id } = req.params
    const userMail = req.payload
    const { name, image } = req.body
    const existingRecipe = await saveRecipes.findOne({ recipeId: id, userMail })
    if (existingRecipe) {

        res.status(409).json("Recipe already in your collection...Please add another!!!")
    } else {
        const newRecipe = await saveRecipes.create({
            recipeId: id, name, image, userMail
        })
        res.status(201).json(newRecipe)

    }
}

// get all save collection
exports.getRecipeFromCollectionCotroller = async (req, res) => {
    console.log("Inside getRecipeFromCollectionCotroller");
    const userMail = req.payload
    const allRecipes = await saveRecipes.find({ userMail })
    
        res.status(200).json(allRecipes)

}

// remove recipe from collection
exports.removeRecipeFromCollectionCotroller = async (req, res) => {
    console.log("Inside removeRecipeFromCollectionCotroller");
    const {id} = req.params
    const recipeDetails = await saveRecipes.findByIdAndDelete({ _id:id })
    res.status(200).json(recipeDetails)

}