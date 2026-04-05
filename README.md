# Finance Data Processing and Access Control Backend

## 📌 Overview

This project is a backend system for managing financial data with role-based access control. It allows users to create, manage, and analyze financial records securely using authentication and authorization.

---

## 🚀 Features

### 👤 User Management

* Create users with roles (Admin, Analyst, Viewer)
* Password hashing using bcrypt
* User status management (active/inactive)

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control middleware
* Protected API routes

### 💰 Financial Records

* Create, update, delete financial records
* Fields:

  * Amount
  * Type (income/expense)
  * Category
  * Date
  * Notes

### 📊 Dashboard APIs

* Total income
* Total expenses
* Net balance
* Role-based access to analytics

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcryptjs

---

## 📂 Project Structure

```
finance-backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── app.js
├── server.js
├── .env
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone <your-repo-link>
cd finance-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Run Server

```
npm run dev
```

---

## 📡 API Endpoints

### 🔹 User APIs

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | /api/users     | Create user   |
| GET    | /api/users     | Get all users |
| PATCH  | /api/users/:id | Update user   |

---

### 🔹 Auth APIs

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| POST   | /api/auth/login | Login and get JWT token |

---

### 🔹 Record APIs

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/records     | Create record |
| GET    | /api/records     | Get records   |
| PUT    | /api/records/:id | Update record |
| DELETE | /api/records/:id | Delete record |

---

### 🔹 Dashboard APIs

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/dashboard | Financial summary |

---

## 🔐 Authentication Usage

Add token in headers:

```
Authorization: Bearer <token>
```

---

## ⚠️ Assumptions

* Roles are predefined: admin, analyst, viewer
* JWT is used for authentication
* MongoDB is used for persistence

---

## ✨ Optional Enhancements (Future Scope)

* Pagination
* Search & filtering
* Soft delete
* Rate limiting
* API documentation (Swagger)

---

## 👨‍💻 Author

Shaik Hussain
