'use strict';

require('dotenv').config;

const server =require('./server');
// const {app:app, start:start}=require('./server'); >> without server.___

server.start(process.env.PORT || 3001);