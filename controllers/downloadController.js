const downloads = require('../models/downloaadModel')

// add to downloads
exports.addToDownloadsController = async (req, res) => {
    console.log("Inside addToDownloadsController");
    const { id } = req.params
    const userMail = req.payload
    const { name, cuisine, image } = req.body
    const existingRecipe = await downloads.findOne({ recipeId: id })
    if (existingRecipe) {
        existingRecipe.count += 1
        await existingRecipe.save()
        res.status(200).json(existingRecipe)
    } else {
        const newRecipe = await downloads.create({
            recipeId: id, name, cuisine, image, count: 1, userMail
        })
        res.status(201).json(newRecipe)

    }

}

// user downloads list
exports.userDownloadListController = async (req, res) => {
    console.log("Inside userDownloadListController");
    const userMail = req.payload
    const allRecipes = await downloads.find({ userMail })
    res.status(200).json(allRecipes)
}