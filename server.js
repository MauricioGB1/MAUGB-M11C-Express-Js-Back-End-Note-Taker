const express = require ('express');


const PORT = 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express ();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});

