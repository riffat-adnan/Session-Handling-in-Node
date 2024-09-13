import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import { mongoURI, sessionSecret, port } from './config/config.js';
import sessionRoutes from './routes/sessionRoutes.js';
import { log } from './utils/logger.js';

const app = express();

mongoose.connect(mongoURI).then(() => log('Connected to MongoDB'))
    .catch(err => log(`MongoDB connection error: ${err.message}`));

const sessionMiddleware = session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoURI }),
    cookie: { secure: false }
});

app.use(sessionMiddleware);

app.use('/api/sessions', sessionRoutes);

app.listen(port, () => {
    log(`Server is running on http://localhost:${port}`);
});