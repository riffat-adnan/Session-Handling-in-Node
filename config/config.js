import dotenv from 'dotenv';

dotenv.config();

export const mongoURI = process.env.MONGO_URI;
export const sessionSecret = process.env.SESSION_SECRET;
export const port = process.env.PORT || 3000;
