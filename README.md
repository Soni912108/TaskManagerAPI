# Task Manager 

Backend for a Task Manager platform, built using Node.js, Express.js, and MongoDB. It provides endpoints for user authentication and CRUD operations on tasks created.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)

## Features

- User authentication (register and login)
- CRUD operations on tasks
- Error handling and logging

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- A MongoDB database (local or Atlas)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Soni912108/TaskManagerAPI.git


2. Install the dependencies:

   ```bash
    npm install

<br>
To start the server in development mode, run:
  
         npm run dev

The server will be running on http://localhost:3001.

##  Environment Variables

    
1.Create a .env file in the root directory of your project and add the following variables:

         PASSWORD=your_mongodb_password
         SECRET=your_jwt_secret

Replace your_mongodb_password and your_jwt_secret with your actual MongoDB password and JWT secret.


## Endpoints
**Authentication**

- POST /api/users/register: Register a new user

- POST /api/users/login: Login a user

**Tasks**

- GET /api/tasks/:userId  Get all tasks for specific user
  
- GET /api/tasks/:id  Get a tasks 
  
- POST /api/tasks: Create a new task (protected)

- PUT /api/tasks/:id
: Update a task (protected)

- DELETE /api/tasks/:id
: Delete a task (protected)

