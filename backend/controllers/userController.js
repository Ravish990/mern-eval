const userModel = require('../db/Models/userModels')
const bcrypt = require('bcryptjs')
const {validationResult } = require('express-validator');
const {v4 : uuid} = require('uuid')
const jwt = require('jsonwebtoken')

const signIn = async(req, res) => {
     let err = validationResult(req);

     if (!err.isEmpty()) {
        res.status(400).json({success : false, message : "something is missing" , error : err.array()})
    
}

     const query = {email : req.body.email}

     const user = await userModel.findOne(query);

     if(!user) {
        res.status(404).json({success: false, message : "user not found"})
     }


     const isPasswordMatched = await bcrypt.compare(req.body.password, user.password)
     if (!isPasswordMatched) {
        res.status(401).json({success : false , message: "You have entered wrong password"})
     }

     const payload = {
        userId : user._id,
        type : user.type || 0,
        name : user.name


     }
     const TOKEN_SECRET = process.env.TOKEN_SECRET;

     jwt.sign(payload, TOKEN_SECRET, {expiresIn : 3600}, (err, token) => {
        if (err) console.log(err + "YOu are not authorized");

        if (token) console.log(token);

        res.json({success: true , token : token})
     });


}



const signUp = async(req,res) => {

    let err = validationResult(req);

   
        if (!err.isEmpty()) {
            res.status(400).json({success : false, message : "something is missing" , error : err.array()})
        
    }
    const existingUser = await userModel.findOne({email : req.body.email});
    if (existingUser) {
        res.status(400).json({
            success: false, message : "user already exist"
        })
    }
    const salt =await bcrypt.genSalt(10);
     const newUser = {
          name : req.body.name,
          email : req.body.email,
          password : await bcrypt.hash(req.body.password, salt),
          phone: req.body.phone
     }

    await userModel.insertOne(newUser)


     return res.status(200).json({success:true , message : "User added" , data : newUser})
}

module.exports = {
    signIn,
    signUp
}