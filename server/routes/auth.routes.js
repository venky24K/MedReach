import express from 'express';
import { validate } from '../middleware/validate.js';
import { loginSchema, registerSchema } from '../validations/auth.validations.js';
import * as authController from '../controllers/auth.controller.js';

const router = express.Router();

// Register a new user
router.post('/register', validate(registerSchema), authController.register);

// Login user
router.post('/login', validate(loginSchema), authController.login);

// Get current user
router.get('/me', authController.getCurrentUser);

export default router;
