    'use strict'

    module.export = {

       server: {
         port: process.env.port || 3000
        },
        database: {
         connection: process.env.conecction || 'mongodb://127.0.0.1:27017'
        },
        auth: {
         secret: '@br@oc@deado'
        }
        
    }
