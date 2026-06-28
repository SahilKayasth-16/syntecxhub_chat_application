# 💬 Connectify

A modern real-time chat application built with the **MERN Stack** and **Socket.IO**. Users can join chat rooms, exchange messages instantly, and view previous conversations stored in MongoDB.

---

## 🚀 Features

* ⚡ Real-time messaging with Socket.IO
* 👥 Join different chat rooms
* 💾 Store chat history in MongoDB
* 🕒 Automatic timestamps for every message
* 👤 Username-based messaging
* 🔄 Auto-scroll to the latest message
* 🎨 Premium Glassmorphism UI
* 📱 Fully Responsive Design
* 🌐 REST API for fetching previous chat history

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Socket.IO Client
* CSS3 (Glassmorphism UI)
* Vite

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB
* Mongoose
* dotenv
* CORS

---

## 📂 Project Structure

```
pulsechat/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── socket/
│   │   └── styles/
│   ├── App.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pulsechat.git
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

Run the backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_SOCKET_URL=http://localhost:5001
```

Run the frontend:

```bash
npm run dev
```

---

## 📡 API Endpoints

### Get Chat History

```
GET /api/messages/:room
```

Returns all messages for a specific chat room.

---

## 📸 Screenshots

> Add screenshots of the application here after deployment.

Example:

* Join Room Page
* Chat Room
* Mobile View

---

## 🔮 Future Improvements

* User Authentication (JWT)
* Online/Offline Status
* Typing Indicator
* Emoji Picker
* Image & File Sharing
* Read Receipts
* Multiple Themes
* User Avatars

---

## 👨‍💻 Author

**Sahil Kayasth**

* MERN Stack Developer
* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile

---

## 📜 License

This project is licensed under the MIT License.
