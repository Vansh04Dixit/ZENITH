module.exports = function isAuthenticated (req, res, next){
    if(req.session.userId){
        next()
    }
}