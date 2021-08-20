import config from './config';
import apiRouter from './api';
import express from 'express';

const server = express();

server.set('view engine','ejs');

server.get('/',(req,res) =>{
    res.render('index', {
        content: 'Hello there <em> DEV </em>'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// or

// server.get('/about',(req,res) =>{
//     /*
//         fs.readFile('./about.html', (err, data) => {
//             res.send(data.toString());
//         });
//     */
//     res.send('The about page');
// });

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});