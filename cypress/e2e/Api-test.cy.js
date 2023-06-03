describe('api testing', () => {
  // it('get request', () => {
  //   cy.request('https://httpbin.org').then((response) => {
  //     const status = response.status;
  //     assert.equal(200, status);
  //   });
  // });
  //
  //
  //
  // it('example of api request', () => {
  //   const request = {
  //     method: 'POST',
  //     url: 'https://httpbin.org/post',
  //     failOnStatusCode: false,
  //   };
  //   cy.request(request).then((response) => {
  //     assert.equal(200, response.status);
  //   });
  // });
  //
  //
  //   // запит з query параметрами
  //   it('example of api request', () => {
  //     const request = {
  //       url: 'https://httpbin.org/get',
  //       qs: {
  //         "key": 'value',
  //       },
  //       failOnStatusCode: false,
  //     };
  //     cy.request(request).then((response) => {
  //       assert.equal('value', response.body.args.key);
  //     });
  //   });
  //
  //
  // запит з у форматі JSON
  // const body = {
  //   bodyKey: 'bodyValue',
  // };

  // const request = {
  //   method: 'POST',
  //   url: 'https://httpbin.org/post',
  //   body,
  //   failOnStatusCode: false,
  // };

  // it('response code should be 200', () => {
  //   cy.request(request).then((response) => {
  //     assert.equal(200, response.status);
  //     assert.notStrictEqual(body, response.body.data);
  //   });
  // });

  //
  //
  // запит з Headers

  // const request = {
  //   method: 'GET',
  //   url: 'https://httpbin.org/headers',
  //   headers: {
  //     "customHeader": 'customValue',
  //   },
  //   failOnStatusCode: false,
  // };

  // it('response code should be 200', () => {
  //   cy.request(request).then((response) => {
  //     assert.equal(200, response.status);
  //     assert.equal('customValue', response.requestHeaders.customHeader);
  //   });
  // });

  //
  //
  // User-Agent

  // const request = {
  //   method: 'GET',
  //   url: 'https://httpbin.org/headers',
  //   headers: {
  //     "user-agent" : "My test user-agent"
  //   },
  //   failOnStatusCode: false,
  // };

  // it('response code should be 200', () => {
  //   cy.request(request).then((response) => {
  //     assert.equal(200, response.status);
  //     assert.equal('My test user-agent', response.requestHeaders['user-agent']);
  //   });
  // });

  //
  //
  // cookies
  // const request = {
  //   method: 'GET',
  //   url: 'https://httpbin.org/headers',
  //   headers: {
  //     'Cookie': 'cookieName=cookieValue'
  //   },
  //   failOnStatusCode: false,
  // };

  // it('response code should be 200', () => {
  //   cy.request(request).then((response) => {
  //     assert.equal(200, response.status);
  //     assert.equal('cookieName=cookieValue', response.requestHeaders['Cookie']);
  //   });
  // });
  //
  //
  // reqres.in create user + debugger
  // const request = {
  //   method: 'POST',
  //   url: 'https://reqres.in/api/users',
  //   body: {
  //     name: 'Eugen',
  //     job: 'QA Engineer',
  //   },
  //   failOnStatusCode: false,
  // };

  // it('response code should be 200', () => {
  //   cy.request(request).then((response) => {
  //     // console.log(response);
  //     // debugger;

  //     assert.equal(201, response.status);
  //     assert.equal('Eugen', response.body.name);

  //     // cy.log(response);
  //   });
  // });

  //
  //
  // продвинуті техніки duration
  // const request = {
  //     method: 'POST',
  //     url: 'https://reqres.in/api/users',
  //     body: {
  //       name: 'Eugen',
  //       job: 'QA Engineer',
  //     },
  //     failOnStatusCode: false,
  //   };

  //   it('response code should be 200', () => {
  //     cy.request(request).then((response) => {
  //       // console.log(response);
  //       // debugger;

  //       assert.equal(201, response.status);
  //       assert.equal('Eugen', response.body.name);

  //       assert.isTrue(response.duration <= 1500);
  //       // cy.log(response);
  //     });
  // });
  //
  //
  // рандомне створення данних

  it('response code should be 200', () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    for (let index = 0; index < 10; index++) {
      const randomId = getRandomInt(999);

      const request = {
        url: 'https://httpbin.org/headers',
        it: randomId,
      };

      cy.request(request).then((response) => {
        // assert.equal(200, response.status);
        assert.isTrue(response.status == 200);
        // assert.isTrue(response.duration <= 1500);
        // cy.log(response);
      });
    }
  });
});
