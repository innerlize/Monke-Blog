const request = require('supertest');
const app = require('../app.js');

describe('Users API', () => {
	test('POST', async () => {
		const user = {
			username: 'username23',
			email: 'xample_email23@test.com',
			password: 'password9081'
		};

		const response = await request(app).post('/api/auth/register').send(user);

		expect([200, 409]).toContain(response.statusCode);
	});
});
