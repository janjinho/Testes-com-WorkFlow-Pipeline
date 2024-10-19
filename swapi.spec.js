const request = require('supertest');

describe('Test SWAPI', () => {
  it('should get a list of planets', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/planets');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });
});

it('should get details of a specific planet', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/planets/1/');
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Tatooine');
  });

  it('should get a list of starships', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/starships');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  it('should get details of a specific film', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/films/1/');
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('A New Hope');
  });

  it('should return 404 for a non-existent endpoint', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/heroes');
    expect(response.statusCode).toBe(404);
  });

  it('should get details of a specific vehicle', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/vehicles/4/');
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Sand Crawler');
  });

  it('should get a list of people', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/people');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  it('should get details of a specific person', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/people/1/');
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Luke Skywalker');
  });

  it('should get a list of species', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/species');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  it('should get a list of films', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/films');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });