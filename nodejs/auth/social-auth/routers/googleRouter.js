import express from 'express'
const Router = express.Router()
import Users from '../modules/usersSC.js'
import tryCatch from '../middleware/tryCatch.js'
import passport  from 'passport'
import auth from 'passport-google-oauth'
const GoogleStrategy = auth.OAuth2Strategy


let userProfile;

Router.use(passport.initialize())
Router.use(passport.session())
passport.serializeUser(function(user, cb) {
  cb(null, user)
})
passport.deserializeUser(function(obj, cb) {
  cb(null, obj)
})

 
passport.use(new GoogleStrategy({
    clientID: '1093096367227-ffiajbtmibm9iufg035bhmlife2a1975.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/api/google/auth/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
  }
))

Router.get('/auth/google', passport.authenticate('google',
  { scope : ['profile', 'email'] }
))
 
Router.get('/auth/redirect', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/googledashboard')
})

Router.get('/googledashboard', tryCatch(async(req, res) =>{
  res.json({ userProfile })
}))

export default Router