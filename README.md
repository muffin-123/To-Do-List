# Todo List App

A full-stack **MERN** (MongoDB, Express, React, Node.js) Todo List application with a “soft-girl” floral UI theme. Users can create, read, update, and delete tasks—each with a title, status (Pending/Ongoing/Completed), and deadline.

---


## 🔍 Features

- **Task CRUD**  
  Create, view, edit, and delete tasks.  
- **Status Tracking**  
  Mark tasks as Pending, Ongoing, or Completed.  
- **Deadline Picker**  
  Choose date & time with a calendar/time selector.  
- **MongoDB Atlas**  
  Persist data in a cloud-hosted MongoDB cluster.  
- **Styled UI**  
  Pastel floral background, rounded cards, soft shadows, and a “soft-girl” color palette.

---

## 🛠️ Tech Stack

| Layer        | Library / Tool           |
| ------------ | ------------------------ |
| **Frontend** | React, Create React App  |
|              | Axios (HTTP client)      |
|              | react-datepicker         |
|              | Bootstrap (utility CSS)  |
| **Backend**  | Node.js, Express         |
|              | Mongoose (MongoDB ODM)   |
|              | CORS, dotenv             |
| **Database** | MongoDB Atlas            |

---

## 💻 Getting Started

### Prerequisites

- [Node.js & npm](https://nodejs.org/)  
- A MongoDB Atlas cluster & user  
- Your connection URI, e.g.:mongodb+srv://223563:rooha123@cluster0.vwl8jp8.mongodb.net/todo-app?retryWrites=true&w=majority
PORT=5000


## 💻 Getting Started

### Installation & Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/To-Do-List.git
cd To-Do-List

# 2. Back End Setup
cd server
npm install
# Create server/.env with:
# MONGO_URI=your-atlas-uri-here
# PORT=5000

# 3. Front End Setup
cd ../client
npm install
# (Optional) add to client/package.json:
# "proxy": "http://localhost:5000"

## ▶️ Running the App Locally
# In Terminal 1 (Back End)
cd server
npm run dev
# → http://localhost:5000

# In Terminal 2 (Front End)
cd client
npm start
# → http://localhost:3000





