# drq
drq - Do Redis Queue Function


## About

Redis Helper Function, useful in combination with [drf](https://github.com/bitcoin-api/drf).


## Example

```.js
'use strict';

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