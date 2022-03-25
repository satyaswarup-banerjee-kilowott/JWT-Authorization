import passport from 'passport';
import passportJwt from 'passport-jwt';
import UserModel from '../model/userSchema';



const JwtStrategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

passport.use(new JwtStrategy({
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "Random String",
}, function(jwt_payload, done) {
    UserModel.findOne({id: jwt_payload.id}, function(err:any, user:any) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));