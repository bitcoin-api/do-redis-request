# do-redis-request 

[![npm version](https://badge.fury.io/js/do-redis-request.svg)](https://badge.fury.io/js/do-redis-request)

do-redis-request - Do Redis Request


## About

Redis Helper Function, useful in combination with [get-redis-client](https://github.com/bitcoin-api/get-redis-client) and [drf](https://github.com/bitcoin-api/drf).


## Installation

```
npm install do-redis-request --save
```


## Example

```.js
'use strict';

const getRedisClient = require( 'get-redis-client' );
const doRedisRequest = require( 'do-redis-request' );


(async () => {

    const redisClient = getRedisClient();

    const value = await doRedisRequest({

        client: redisClient,
        command: 'get',
        redisArguments: [ 'redisKey' ],
    });

    console.log( 'results:', value );

    redisClient.quit();
})();
```