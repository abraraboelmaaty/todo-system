const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors =require('cors')

const authRouter = require('./routes/auth.routs')
const todoRouter = require('./routes/todo.routs')
const isAdmin = require('./routes/isAdmin.routs')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/auth',authRouter)
app.use('/todos',todoRouter)
app.use('/admin',isAdmin)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
