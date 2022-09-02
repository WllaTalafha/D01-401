'use strict';

const server = require('../server');

const supertest = require('supertest');

const request = supertest(server.app); 

describe ('testing API server',()=>{
    it('testing /',async()=>{
        const response = await request.get('/');
        //console.log(response);
        expect(response.text).toEqual('hello lolo');
        //expect(response.status).toEqual(200);
    })
    it('testing /data', async()=>{
        const response = await request.get('/data');
        expect(typeof response.body).toEqual('object');
    })
})