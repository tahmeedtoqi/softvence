const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const errorMiddleware = require('./middlewares/error.middleware');
const { json } = require('express');

const app = express();

app.use(helmet());
app.use(cors());
app.use(json());

app.get('/health', (req, res) => res.json({ status: 'OK' }));
app.use('/users', userRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use(errorMiddleware);

module.exports = app;