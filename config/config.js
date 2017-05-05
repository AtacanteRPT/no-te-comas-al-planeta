var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'no-comas-el-planeta'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root@127.0.0.1/no-comas-el-planeta-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'no-comas-el-planeta'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/no-comas-el-planeta-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'no-comas-el-planeta'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/no-comas-el-planeta-production'
  }

};

module.exports = config[env];
