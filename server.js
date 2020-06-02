const app = require('./bin/index')
const keys = require('./bin/keys')

app.listen(3001, () => {
    console.log('Estou funcionando!')
    console.log('Para desligar, use CTRL + C')

})