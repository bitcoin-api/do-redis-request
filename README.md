# do-redis-request
do-redis-request - Do Redis Request


## About

Redis Helper Function, useful in combination with [get-redis-client](https://github.com/bitcoin-api/get-redis-client) and [drf](https://github.com/bitcoin-api/drf).


## Example

```.js
'use strict';

const getRedisClient = require( 'get-redis-client' );
const doRedisRequest = require( 'do-redis-request' );


async () => {

    const redisClient = getRedisClient();

    const value = await doRedisRequest({

        client: redisClient,
        command: 'get',
        redisArguments: [ 'redisKey' ],
    });

    console.log( 'results:', value );
})();
```