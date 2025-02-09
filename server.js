import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/trendingChair', express.static(path.join(__dirname, 'public/trendingChair')));
app.use('/trendingCouch', express.static(path.join(__dirname, 'public/trendingCouch')));
app.use('/trendingFurniture', express.static(path.join(__dirname, 'public/trendingFurniture')));
app.use('/trendingTable', express.static(path.join(__dirname, 'public/trendingTable')));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log('Klaida jungiantis prie MySQL duomenų bazės: ', err);
    } else {
        console.log('Prisijungta prie MySQL duomenų bazės!');
    }
});

app.get('/app/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveris veikia per prievadą ${PORT}`));

