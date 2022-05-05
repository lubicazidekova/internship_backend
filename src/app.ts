import express from 'express'
import passport from 'passport'
import v1 from './api/v1'
import {ExtractJwt,Strategy as JwtStrategy,VerifiedCallback} from "passport-jwt";
import {Request} from 'express'
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
/*
// app.ts
passport.use('jwt-api', new JwtStrategy({
    audience: 'jwt-api',
    jwtFromRequest: ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken(), ExtractJwt.fromUrlQueryParameter('token')]),
    passReqToCallback: true,
    secretOrKey: process.env.JWT_SECRET
}, (req: Request, payload: any, done: VerifiedCallback) => {
    // Do something
    done(null, user)
}))*/

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

// Initialize passport
app.use(passport.initialize())

// Register API router
app.use('/api/v1', v1())

// Register router
app.use('/api/v1', v1())



export default app