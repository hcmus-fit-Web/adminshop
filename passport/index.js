const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

const adminService = require('../auth/adminService');

passport.use(new LocalStrategy(
    async function(username, password, done) {
        const user = await adminService.findByUsername(username);
        if(!user)
            return done(null, false, {message: 'Incorrect username'});
        if (!await adminService.validPassword(password, user)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null,{username : user.username , email :user.email , number:user.number, name:user.name});
});

passport.deserializeUser(async function(username, done) {
    done(null, username);
});

module.exports = passport;