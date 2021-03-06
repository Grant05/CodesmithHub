const mocha = require('mocha');
const request = require('supertest');
const assert = require('chai').assert

const app = require('../server/server.js');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

// create user 
// verify user
// grab users 
// return posts from users 
// create new post in database


describe('server unit tests', () => {

	it('should respond with text/html content type', (done) => {
		request(HOST)
			.get('/')
      .end((err, res) => {
      	if (err) done(err); 
      	assert(res.headers['content-type'] == 'text/html; charset=UTF-8', 'expected content type to equal text/html');
      	done();
      });
	});

	it('should resond with 200 status', (done) => {
		request(HOST)
			.get('/')
      .end((err, res) => {
      	if (err) done(err); 
      	assert(res.status == 200, 'expected status to equal 200');
      	done();
      });
	});

	it('should respond with "OK" status message', (done) => {
		request(HOST)
			.get('/')
      .end((err, res) => {
      	if (err) done(err); 
      	assert(res.ok === true, 'expected status message to equal "OK"');
      	done();
      });
	});

	it('should create a new user in database', (done) => {
    request(HOST)
    	.post('/authenticate/validate')
    	.send({ email: 'test1234@test.com', password: 'password' })
    	.end((err, res) => {
    		if (err) done(err); 
    		assert(res.body.id !== undefined, 'expected id to not be undefined');
    		done();
    	})
  })

  it('should verify that a given user exists', (done) => {
    request(HOST)
    	.post('/authenticate/validate')
    	.send({ email: 'test1234@test.com', password: 'password' })
    	.end((err, res) => {
    		if (err) done(err); 
    		assert(res.body.id == 252, 'expected id to equal 252');
    		done();
    	})
  })

  it('should successfully post new status to news feed', (done) => {
    request(HOST)
    	.get('/authenticate/validate/user/main')
    	.send({ email: 'test1234@test.com', password: 'password', message: 'some message' })
    	.end((err, res) => {
    		console.log('res object', res);
    		if (err) done(err); 
    		// assert(res.body.id == 252, 'expected id to equal 252');
    		done();
    	})
  })
}) 

