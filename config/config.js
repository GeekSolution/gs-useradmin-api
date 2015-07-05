var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'geek-solution'
    },
    port: 3000,
    db: 'mongodb://localhost/geek-solution-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'geek-solution'
    },
    port: 3000,
    db: 'mongodb://localhost/geek-solution-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'geek-solution'
    },
    port: 3000,
    db: 'mongodb://localhost/geek-solution-production'
  }
};

module.exports = config[env];
