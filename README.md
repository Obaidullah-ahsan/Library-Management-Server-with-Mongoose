# 📚 Library Management API

#### Live site link [Srver Live Link](https://library-management-server-with-mong.vercel.app/)

## 🎯 Objective

The Library Management API is a full-featured backend system designed to manage books and borrowing activities for a digital or physical library. Built with Express.js, TypeScript, and MongoDB (Mongoose)


## 🚀 Features (Detailed)

- **Book Management:** Create, update, retrieve, and delete books with validations on essential fields like title, author, genre, and ISBN. Books are classified into fixed genres and must include inventory (copies) and availability status.

- **Borrowing Operations:** Creating borrow records with automatic inventory management and due date tracking.

- **Inventory Control:** Automatic updates to book availability and copy counts during borrowing operations


### 🔍 Filtering, Sorting, and Limiting
- **Filtering:** Filter books by genre (e.g., `?filter=FICTION`)
- **Sorting:** Sort by any field (e.g., `?sortBy=createdAt&sort=desc`)
- **Limiting:** Limit results (e.g., `?limit=5`)


## 🧑‍💻 Tech Stack

- **Express.js**
- **MongoDB & Mongoose**
- **TypeScript**


---

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/library-management-server.git
cd library-management-server

# Install dependencies
npm install

# For development (auto-restart)
npm run dev