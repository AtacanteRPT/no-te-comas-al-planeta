'use strict';

var expect = require('chai').expect;

var config = require('../../../config/config');

describe('config', function() {
  it('should load', function() {
    expect(process.env.NODE_ENV).to.eql('test');

    expect(config).to.eql({
      root: config.root,
      app: {
        name: 'no-comas-el-planeta'
      },
      port: process.env.PORT || 3000,
      db: 'sqlite://localhost/no-comas-el-planeta-test',
      storage: config.storage
    });
  });
});
