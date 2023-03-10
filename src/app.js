const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();


const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');


const genresRoutesApi = require('./routes/api/genresRoutes');
const moviesRoutesApi = require('./routes/api/moviesRoutes');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode 
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use('/api/genres', genresRoutesApi);
app.use('/api/movies', moviesRoutesApi);


app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));