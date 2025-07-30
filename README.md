# ⚡ Zenix — Smart Event Platform

Zenix is a real-time event and notification platform built with the MERN stack. It allows users to create and manage events, receive live updates, and communicate instantly. Designed to be scalable, mobile-ready, and developer-friendly, it lays the foundation for future integration with React Native.

## 🔧 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Firebase (Realtime DB), Socket.io-client  
- **Backend:** Node.js, Express.js, MongoDB, Socket.io  
- **Auth:** JWT with Role-Based Access Control (Admin, Organizer, Participant)
- **Dev Tools:** ESLint, Prettier, Postman, Draw.io  
- **License:** MIT

## 📁 Project Structure

```
zenix/
|
├── client/
├── server/
├── docs/
├── screenshots/
├── README.md
├── LICENSE
└── .gitignore
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shawaiz-khan/zenix.git
cd zenix
````

### 2. Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

### 3. Run the app

#### Backend (Port 8080)

```bash
npm run dev
```

#### Frontend (Port 5173)

```bash
npm run dev
```

## 📌 Features

* 🔐 JWT-based login and registration
* 👥 Role-based access for Admin, Organizer, and Participants
* 🔔 Real-time notifications using Socket.io
* 🗓️ Event scheduling and management
* 💬 Event-specific chat with live message updates
* 📊 Diagrams for system and database design (in `/docs/assets`)
* 📱 Ready for React Native extension

## 📄 Documentation

See [docs/](./docs/) for:

* [`REPORT.md`](./docs/REPORT.md) — full project report
* [`MODELS.md`](./docs//MODELS.md) — all project model schema
* [`API.md`](./docs/API.md) — complete documentation for the api
* [`ROADMAP.md`](./docs//ROADMAP.md) — roadmap for the project

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

> Built with purpose by *Shawaiz Khan* ❤
> Future-ready. Real-time. Reliable.