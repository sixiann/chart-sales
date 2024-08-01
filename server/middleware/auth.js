const AUTH_TOKEN = '123abc';

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token === AUTH_TOKEN) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}

module.exports = authenticate;
