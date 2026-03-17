import express from 'express';
import { models } from '../data.js';

const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json(models);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
