//create user
describe('api testing', () => {
  //   get list of users
  it('get list of users response code should be 200', () => {
    const request = {
      url: 'https://reqres.in/api/users',
      qs: {
        page: 2,
      },
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });

  //greate a new user
  it('greate user response code should be 201', () => {
    const request = {
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name: 'Eugen',
        job: 'QA Engineer',
      },
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(201, response.status);
      assert.equal('Eugen', response.body.name);
    });
  });

  //   get single user
  it('get single user response code should be 200', () => {
    const request = {
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
  //   update user
  it('update user with body response code should be 200', () => {
    const body = {
      name: 'morpheus',
      job: 'zion resident',
    };

    const request = {
      method: 'PUT',
      body,
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });

  // запит з Headers

  it('custom Header response code should be 200', () => {
    const request = {
      method: 'GET',
      url: 'https://reqres.in/api/headers',
      headers: {
        customHeader: 'newTestValue',
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal('newTestValue', response.requestHeaders.customHeader);
      //   cy.log(response);
    });
  });

  // User-Agent

  it('user-agent response code should be 200', () => {
    const request = {
      method: 'GET',
      url: 'https://reqres.in/api/headers',
      headers: {
        'user-agent': 'My test user-agent',
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal('My test user-agent', response.requestHeaders['user-agent']);
      //   cy.log(response);
    });
  });

  //   query params list of users
  it('query params list of users response code should be 200', () => {
    const request = {
      url: 'https://reqres.in/api/users',
      qs: {
        page: 2,
      },
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });

  //   get list of users
  it('get single user with body verify response code should be 200', () => {
    const request = {
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal('Janet', response.body.data.first_name);
    });
  });

  //   перевірка часу виконання запиту
  it('verify duration of request: less then 1500', () => {
    const request = {
      url: 'https://reqres.in/api/users',
      qs: {
        page: 2,
      },
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 1500);
    });
  });

  //   get single user
  it('get not found user response code should be 404', () => {
    const request = {
      url: 'https://reqres.in/api/users/23',
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.equal(404, response.status);
    });
  });
});
