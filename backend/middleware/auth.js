const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET
module.exports = () => {
    const token = req.headers['x-access-token'];
 try{
    const decode = jwt.verify(token, TOKEN_SECRET);
 } catch (err) {
    console.log(err);
 }
    

    req.userId = decode.userId;
    next();
}