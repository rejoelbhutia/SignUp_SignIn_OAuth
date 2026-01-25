import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js'; 
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    // THIS FUNCTION RUNS AFTER USER LOGS IN
    
    try {
      console.log("Google Profile:", profile); // You will see the ID here in terminal

      // 1. Check if user exists using the GOOGLE ID
      const existingUser = await User.findByGoogleId(profile.id);

      if (existingUser) {
        // User exists, let them in
        return done(null, existingUser);
      }

      // 2. If no user, create one using data from Google
      const newUser = await User.create({
        google_id: profile.id,          // <--- GETTING THE ID HERE
        fullname: profile.displayName,  // <--- GETTING NAME HERE
        email: profile.emails[0].value  // <--- GETTING EMAIL HERE
      });

      done(null, newUser);

    } catch (err) {
      done(err, null);
    }
  }
));

// These two functions tell Passport how to manage the "Session" (Cookie)
passport.serializeUser((user, done) => {
  done(null, user.id); // Save only the database ID to the cookie
});

passport.deserializeUser(async (id, done) => {
    // If the browser sends a cookie, find the user
    // You might need to add a findById method to your User model later
    // For now, we can use a raw query or add findById to User.js
    done(null, { id }); 
});