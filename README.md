 # Project Overview
This is a basic API for managing students and courses, built with Node.js and Express.Using database for data storage and environment variables for security.

Setup Steps
To get started, follow these quick steps:

1. Prerequisites
You will need Node.js, npm, and Git installed.

2. Clone the Repository
git clone [https://github.com/your_username/your_repo_name.git](https://github.com/your_username/your_repo_name.git)
cd your_repo_name

3. Install Dependencies
npm install

4. Environment Variables
Create a .env file and copy the contents from .env.example, then fill in your database details.

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=lab_crud

How to Run the Application
Start the server from your terminal:

node server.js

The API will be running on http://localhost:3000.

API Endpoints
Use these endpoints to manage your data.

Students Endpoints
GET /api/students: Retrieves a list of all students.

GET /api/students/:id: Retrieves a single student by their ID.

POST /api/students: Creates a new student.

PUT /api/students/:id: Updates a student's information by ID.

DELETE /api/students/:id: Deletes a student by ID.

Example Request Body for POST/PUT:

{
  "name": "John Doe",
  "age": 20,
  "major": "Computer Science"
}

Courses Endpoints
GET /api/courses: Retrieves a list of all courses.

GET /api/courses/:id: Retrieves a single course by its ID.

POST /api/courses: Creates a new course.

PUT /api/courses/:id: Updates a course's information by ID.

DELETE /api/courses/:id: Deletes a course by ID.

Example Request Body for POST/PUT:

{
  "title": "Introduction to Web Development",
  "instructor": "Jane Smith",
  "credits": 3
}
