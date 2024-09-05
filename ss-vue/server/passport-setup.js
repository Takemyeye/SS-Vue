const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo' // Обеспечивает получение более полного профиля
},
async (accessToken, refreshToken, profile, done) => {
  // Профиль содержит более полную информацию о пользователе
  const { sub: id, name, email, picture, verified_email, locale } = profile._json;

  // Составляем объект пользователя
  const user = {
    id,
    username: name,
    email,
    avatar: picture,
    verified: verified_email,
    locale,
    token: accessToken
  };

  // Передаем пользователя в req.user
  done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
