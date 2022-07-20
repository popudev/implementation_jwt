const authRouter = require('./auth');
const userRouter = require('./user');

function route(app) {
  app.get('/', (req, res) => {
    res.send('Hello world');
  });

  app.use('/auth', authRouter);
  app.use('/user', userRouter);
}

module.exports = route;
