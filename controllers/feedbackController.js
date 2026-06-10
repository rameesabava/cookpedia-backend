const feedbacks = require('../models/feedbackModel')

// add feedback
exports.addFeedbackController = async (req,res)=>{
    console.log("Inside addFeedbackController");
    const {name, email, message} = req.body
    const newFeedback = await feedbacks.create({name,email,message})
    res.status(201).json(newFeedback)
    
}

// get all approved feedbacks
exports.getALlApprovedFeedbacksController = async (req,res)=>{
    console.log("Inside getALlApprovedFeedbacksController");
    const allApprovedFeedbacks = await feedbacks.find({status:{$eq:'approved'}})
    res.status(200).json(allApprovedFeedbacks)
}

// get All Feedbacks

// update feedback status