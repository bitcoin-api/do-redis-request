'use strict';

const stringify = message => JSON.stringify( message, null, 4 );

const shouldLog = !!process.env.DO_REDIS_REQUEST_LOGS_ON;


module.exports = Object.freeze( async ({

    client,
    command,
    redisArguments = []

}) => {

    if( !!shouldLog ) {
        console.log(
            'Doing Redis Request:',
            stringify({
                command,
                redisArguments
            })
        );
    }

    return await new Promise( ( resolve, reject ) => {

        const callback = ( err, redisResponse ) => {

            if( !!err ) {

                console.log(
                    'Error in Redis Request:',
                    err
                );

                return reject( err );
            }

            if( !!shouldLog ) {
                console.log(
                    'Redis Request with the following args successful:',
                    stringify({
                        command,
                        redisArguments
                    }),
                    'here is the redis response:',
                    redisResponse
                );
            }

            resolve( redisResponse );
        };
        
        client[ command ]( ...redisArguments, callback );
    });
});
