## Zenix Project Roadmap

Zenix is a real-time event and notification platform built with the MERN stack, designed to handle role-based access, live user interactions, and future expansion into React Native.

### MVP (Minimum Viable Product)

#### Core Setup

* [ ] Initialize MERN stack project
* [ ] Setup GitHub repo with `.gitignore`, `README.md`, `LICENSE`
* [ ] Add environment config `.env`

#### Authentication & Authorization

* [ ] Register & login with JWT
* [ ] Secure routes with role-based access (Admin, User)
* [ ] Refresh token handling

#### Real-Time Engine

* [ ] Setup Socket.io on server and client
* [ ] Emit & listen to event notifications
* [ ] Map user to socket ID

#### Core Features

* [ ] Create/update/delete events
* [ ] User dashboard with personalized events
* [ ] Real-time notifications
* [ ] Chatbot feature

### Phase 2: Feature Expansion

#### Users & Profiles

* [ ] Edit profile
* [ ] View other users (admin only)

#### Notifications System

* [ ] In-app notification center
* [ ] Read/unread state

#### Optional Chat (Stretch Goal)

* [ ] Real-time 1-to-1 chat via Socket.io
* [ ] Persist chat history in MongoDB

### Phase 3: Admin & Analytics

#### Admin Dashboard

* [ ] See user statistics
* [ ] Track events & activity logs
* [ ] Moderate content

#### Search & Filter

* [ ] Filter events by category, date, owner

### Phase 4: Polish & Production

#### Deployment

* [ ] Deploy client to Vercel
* [ ] Deploy server to Render or Railway
* [ ] Use MongoDB Atlas

#### Security

* [ ] Rate limiting
* [ ] Input sanitization

#### Documentation

* [ ] Complete `README.md`
* [ ] Add system architecture diagram in `/docs`
* [ ] Include API documentation (Postman/Insomnia)

### Phase 5: React Native (Future)

* [ ] Migrate UI to mobile
* [ ] Reuse APIs and real-time layer
* [ ] Test native notifications and socket connection

### Contributing

* Create issues for bugs or features
* Use conventional commits
* PRs require a linked issue