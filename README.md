# Task Management System

A full-stack Task Management System that helps users organize, track, and manage their daily tasks efficiently. The application provides a clean and responsive interface for creating, updating, deleting, and monitoring tasks.

## Features

* User Authentication (Login & Registration)
* Create, Update, and Delete Tasks
* Mark Tasks as Completed or Pending
* Task Status Management
* Responsive User Interface
* Secure Backend APIs
* MongoDB Database Integration

## Tech Stack

### Frontend

* React.js
* Axios
* React Router
* CSS / Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB

## Project Structure

```
Task Management System/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd Task-Management-System
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd ../backend
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Start Backend

```bash
npm start
```

### Start Frontend

```bash
cd ../frontend
npm start
```

## Future Enhancements

* Task Categories
* Due Date Reminders
* Email Notifications
* Dark Mode
* Team Collaboration Features
* Dashboard Analytics

## Author

https://github.com/sathwik-emmadi

## License

This project is developed for learning, academic, and portfolio purposes.

## Live Demo

https://sathwik-task-manager.vercel.app

## GitHub Repository

https://github.com/sathwik-emmadi/task-management-system

