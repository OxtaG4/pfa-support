const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('<h2>PFA Support<h2>');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('El Servidor Esta Listo');
    });
    return true;
}