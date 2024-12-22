import express from 'express';
const router = express.Router();
import { body } from 'express-validator';
import { registerUser } from '../controllers/user.controller.js';

router.post('/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long')
], registerUser);


export default router