/*  EXPRESS SETUP  */

const express = require('express');
const app = express();

app.use(express.static(__dirname));

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));


const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const conn = mongoose.connect('mongodb://31.220.57.187/biller',
  { auth: {
    authdb: 'admin'
},"user": "myUserAdmin",
  "pass": "N0p@sword" }).then((res)=>{
}).catch(err=> console.log('Err in conn',err));


  var MyModel = mongoose.model('items', new mongoose.Schema({ title: String }));
  // Works
  MyModel.findOne(function(error, result) { console.log('error, result',error, result); });
const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String
});

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');

/* PASSPORT LOCAL AUTHENTICATION */

passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

app.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?info=' + info);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });

  })(req, res, next);
});

app.get('/login',

  (req, res) => {
    UserDetails.register({username:'paul', active: false}, 'paul');
    UserDetails.register({username:'jay', active: false}, 'jay');
    UserDetails.register({username:'roy', active: false}, 'roy');
    console.log('User creating');
    //res.sendFile('html/login.html',
  { root: __dirname }}
);

app.get('/',
  //connectEnsureLogin.ensureLoggedIn(),
  (req, res) => { UserDetails.register({username:'paul', active: false}, 'paul');
  UserDetails.register({username:'jay', active: false}, 'jay');
  UserDetails.register({username:'roy', active: false}, 'roy');}
);

app.get('/private',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('html/private.html', {root: __dirname})
);

app.get('/user',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);


