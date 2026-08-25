#  Notes Manager

A full-stack **Notes Manager** application that allows users to create, view, update, and delete notes.

The project is built using **React.js** for the frontend, **Node.js + Express.js** for the backend, and **MongoDB** for storing notes.

---

##  Features

* Create a new note
* View all notes
* Update existing notes
* Delete notes
* RESTful API integration
* MongoDB database storage
* Responsive and modern dark UI
* Axios for API requests
* CORS enabled for frontend-backend communication

---

##  Tech Stack

### Frontend

* React.js
* Axios
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS

---

##  Project Structure

```text
Notes-Manager/
│
├── Backend/
│   ├── models/
│   │   └── note.model.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
└── README.md
```

---

##  CRUD Operations

The application implements all four basic CRUD operations:

| Operation   | HTTP Method | API Endpoint     |
| ----------- | ----------- | ---------------- |
| Create Note | `POST`      | `/api/notes`     |
| Get Notes   | `GET`       | `/api/notes`     |
| Update Note | `PATCH`     | `/api/notes/:id` |
| Delete Note | `DELETE`    | `/api/notes/:id` |

---

##  API Endpoints

### Create Note

```http
POST /api/notes
```

Request body:

```json
{
  "title": "My Note",
  "description": "This is my note."
}
```

---

### Get All Notes

```http
GET /api/notes
```

Returns all notes stored in MongoDB.

---

### Update Note

```http
PATCH /api/notes/:id
```

Request body:

```json
{
  "title": "Updated Title",
  "description": "Updated description."
}
```

---

### Delete Note

```http
DELETE /api/notes/:id
```

Deletes the note associated with the given MongoDB ID.

---

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

```bash
cd Notes-Manager
```

---

### 2. Backend Setup

Go to the backend directory:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:3000
```

---

### 3. Frontend Setup

Open another terminal and go to the frontend directory:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will usually be available at:

```text
http://localhost:5173
```

---

##  Environment Variables

The backend requires a MongoDB connection string.

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes
PORT=3000
```

**Do not commit your `.env` file to GitHub.**

Add this to `.gitignore`:

```text
.env
node_modules/
```

---

##  How It Works

### Creating a Note

The user enters a title and description and clicks **Create Note**.

The React frontend sends:

```text
POST /api/notes
```

to the Express backend.

The backend stores the note in MongoDB and returns the created note.

After a successful request, the input fields are cleared and the notes list is refreshed.

---

### Updating a Note

Clicking the **Update** button asks the user for a new title and description.

The frontend sends:

```text
PATCH /api/notes/:id
```

The backend uses the MongoDB `_id` to find and update the note.

---

### Deleting a Note

Clicking **Delete** sends:

```text
DELETE /api/notes/:id
```

The backend removes the note from MongoDB and the frontend refreshes the list.

---

##  UI

The application uses a modern dark-themed interface with:

* Notes cards
* Create Note form
* Red Delete button
* Green Update button
* Responsive layout
* Hover effects

---

  What I Learned

Through this project, I practiced:

* React state management using `useState`
* React lifecycle using `useEffect`
* Handling form submissions
* Making API requests with Axios
* Building REST APIs with Express.js
* Creating MongoDB models using Mongoose
* Implementing CRUD operations
* Connecting frontend and backend
* Using HTTP methods such as GET, POST, PATCH, and DELETE
* Handling MongoDB document IDs
* Creating a responsive UI using CSS
* Using Git and GitHub for version control

---

##  Future Improvements

Possible future improvements include:

* User authentication
* Search notes
* Filter and sort notes
* Edit notes using a proper form/modal instead of `prompt()`
* Add note categories
* Add timestamps
* Add pagination
* Deploy frontend and backend
* Add form validation
* Add loading and error states

---

##  Author

**Swati Sharma**

Built as a full-stack CRUD project using the MERN stack.

---

##  If You Like This Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.
