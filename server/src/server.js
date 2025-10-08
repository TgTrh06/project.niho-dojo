import express from 'express';
import authRoutes from './routes/auth.route.js';
import 'dotenv/config.js';
import cookieParser from 'cookie-parser';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hello, World!');
});

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});