import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL || "file:./dev.db",
});

const JWT_SECRET = process.env.JWT_SECRET || 'machilink_super_secret_jwt_key_2026';

router.post('/register', async (req, res) => {
  try {
    const { companyName, email, password, role, companyType, manufacturingCategory } = req.body;
    
    // Generate mock company ID
    const companyId = `MLK-${Math.floor(100000 + Math.random() * 900000)}`;
    const username = `user_${companyId}`;
    
    const hashedPassword = await bcrypt.hash(password || 'X7P#29AB', 10);
    
    const user = await prisma.user.create({
      data: {
        companyId,
        username,
        password: hashedPassword,
        role: role || 'OWNER',
        company: {
          create: {
            name: companyName,
            email,
            companyType: companyType || 'Private Limited',
            manufacturingCategory: manufacturingCategory || 'General',
          }
        }
      },
      include: {
        company: true
      }
    });

    res.status(201).json({
      message: 'Registration successful',
      credentials: { companyId, username, temporaryPassword: password || 'X7P#29AB' },
      user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = await prisma.user.findUnique({
      where: { username },
      include: { company: true }
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, companyId: user.company?.id },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        company: user.company
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
