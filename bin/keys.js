    'use strict'

    module.export = {

       server: {
         port: process.env.port || 5859
        },
        database: {
         connection: process.env.conecction || 'mongodb://127.0.0.1:27017'
        },
        auth: {
         secret: '@br@oc@deado'
        }
        
    }
