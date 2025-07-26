import { getAuth } from 'firebase-admin/auth';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expires in 30 days
  });
};

export const register = async (req, res) => {
  try {
    const { email, password, name, role, phone, address } = req.body;

    // Create user in Firebase
    const userRecord = await getAuth().createUser({
      email,
      password,
      displayName: name,
    });

    // Create user in database
    const user = new User({
      _id: userRecord.uid,
      email,
      name,
      role: role || 'beneficiary',
      phone,
      address,
    });

    await user.save();

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Sign in with Firebase
    const userCredential = await getAuth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Get user from database
    const dbUser = await User.findById(user.uid);
    if (!dbUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate JWT token
    const token = generateToken(dbUser._id);

    res.json({
      _id: dbUser._id,
      name: dbUser.name,
      email: dbUser.email,
      role: dbUser.role,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
