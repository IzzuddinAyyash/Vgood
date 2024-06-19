const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Pastikan Anda mengimpor mysql2
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_massive'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Validasi input
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email dan password wajib diisi' });
  }

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Email atau password salah' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Email atau password salah' });
      }

      const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

      res.json({ success: true, token });
    });
  });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, phone, password } = req.body;

  // Validasi input
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ success: false, message: 'Semua bidang wajib diisi' });
  }

  // Mengecek apakah email sudah terdaftar
  const queryCheckEmail = 'SELECT * FROM users WHERE email = ?';
  db.query(queryCheckEmail, [email], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: 'Email sudah terdaftar' });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) throw err;

      const query = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
      db.query(query, [name, email, phone, hash], (err, results) => {
        if (err) throw err;

        res.json({ success: true });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
