# Backend CRUD API

A simple RESTful backend built with **Node.js, Express.js, and MongoDB** for creating, reading, updating, and deleting notes.

## 🚀 Features

* Create a new note
* Fetch all notes
* Update a note's description
* Delete a note
* MongoDB database integration
* RESTful API endpoints
* Environment variables for sensitive configuration

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Git & GitHub**
* **Postman** for API testing

## 📁 Project Structure

```text
Backend/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── database.js
│   └── models/
│       └── note.model.js
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/swati485/Backend-prac.git
cd Backend-prac
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

> Do not commit your `.env` file to GitHub.

### 4. Start the server

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

## 🔗 API Endpoints

### Create a Note

**POST**

```text
/api/notes
```

Request body:

```json
{
  "title": "My First Note",
  "description": "This is my first note."
}
```

### Get All Notes

**GET**

```text
/api/notes
```

Returns all notes stored in MongoDB.

### Update a Note

**PATCH**

```text
/api/notes/:id
```

Request body:

```json
{
  "description": "Updated note description."
}
```

Replace `:id` with the MongoDB document ID.

### Delete a Note

**DELETE**

```text
/api/notes/:id
```

Replace `:id` with the MongoDB document ID.

## 🧪 Testing

The APIs can be tested using **Postman**.

| Method | Endpoint         | Purpose       |
| ------ | ---------------- | ------------- |
| POST   | `/api/notes`     | Create a note |
| GET    | `/api/notes`     | Get all notes |
| PATCH  | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

For POST and PATCH requests, use:

```text
Content-Type: application/json
```

## 🔐 Environment & Security

The project uses environment variables to keep sensitive information such as the MongoDB connection string outside the source code.

The following files are excluded using `.gitignore`:

```text
node_modules/
.env
```

## 📌 Future Improvements

* Add validation for request data
* Add error handling middleware
* Add GET endpoint for a single note
* Add timestamps to notes
* Add authentication and authorization
* Add a frontend interface

## 👩‍💻 Author

**Swati Sharma**

GitHub: [@swati485](https://github.com/swati485)

---

⭐ If you find this project useful, consider giving the repository a star.
