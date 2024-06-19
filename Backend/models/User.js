const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {};

User.create = async (name, email, phone, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.execute(
        'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
        [name, email, phone, hashedPassword]
    );
    return result;
};

User.findByEmail = async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};

module.exports = User;
