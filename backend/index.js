import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
} catch (error) {
    console.error('Error starting server:', error);
}
