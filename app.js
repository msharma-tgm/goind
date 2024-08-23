const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname+'/public')));


app.get('/', (req, res) => {
    res.sendFile("public/index.html", {root: __dirname });
});
app.get('/konto', (req, res) => {
    res.sendFile("public/konto.html", {root: __dirname });
});
app.get('/impressum', (req, res) => {
    res.sendFile("public/impressum.html", {root: __dirname });
});
app.get('/menu', (req, res) => {
    res.sendFile("public/menu.html", {root: __dirname });
});
app.get('/kontakt', (req, res) => {
    res.sendFile("public/kontakt.html", {root: __dirname });
});
app.get('/bestellen', (req, res) => {
    res.sendFile("public/bestellen.html", {root: __dirname });
});
app.get('/login', (req, res) => {
    res.sendFile("public/login.html", {root: __dirname });
});

app.get('/register', (req, res) => {
    res.sendFile("public/register.html", {root: __dirname });
});

app.get('/profile', (req, res) => {
    res.sendFile("public/profile.html", {root: __dirname });
});


/*mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/
/*
const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/users',
  collection: 'sessions',
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'GOINDIA',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.redirect('/register');
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      req.session.userId = user._id;
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    res.redirect('/login');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

*/
app.listen(PORT, () => {
 console.log(`Server is running at http://localhost:${PORT}`);
});