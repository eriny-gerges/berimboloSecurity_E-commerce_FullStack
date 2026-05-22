# Berimbolo Security

Advanced cybersecurity and smart protection platform built with React, Laravel, and MySQL.

---

# Features

- Modern Cybersecurity UI
- Fully Responsive Design
- React + Vite Frontend
- Laravel Backend API
- MySQL Database
- Authentication System
- Contact & Feedback System
- Secure Dashboard

---

# Tech Stack

## Frontend
- React.js
- Vite
- Bootstrap
- CSS3

## Backend
- Laravel
- PHP
- MySQL

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/eriny-gerges/berimboloSecurity_E-commerce_FullStack
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# Backend Setup (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

---

# Database Setup

1. Open phpMyAdmin or MySQL
2. Create a database named:

```sql
berimbolo_security
```

3. Import the SQL file included in the project:

```bash
database.sql
```

4. Configure database credentials inside:

```bash
backend/.env
```

Example:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=berimbolo_security
DB_USERNAME=root
DB_PASSWORD=
```

---

# Run Laravel Server

```bash
php artisan serve
```

Backend will run on:

```bash
http://127.0.0.1:8000
```

---

# Project Structure

```bash
project/
│
├── frontend/
│   ├── src/
│   ├── assets/
│   └── components/
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── public/
│
└── database.sql
```

---

# Production Build

Frontend:

```bash
npm run build
```

Laravel cache optimization:

```bash
php artisan optimize
```

---

# Author

Developed by ERINY GERGES