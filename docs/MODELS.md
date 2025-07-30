# Zenix Data Models

### User Model

| Field     | Type       | Required | Description             |
| --------- | ---------- | -------- | ----------------------- |
| username  | String     | Yes      | Unique                  |
| email     | String     | Yes      | Used for login          |
| password  | String     | Yes      | Hashed                  |
| role      | String     | Yes      | Values: admin, user     |
| favorites | [ObjectId] | No       | Favorite any event      |
| authToken | String     | Yes      | Used for authentication |

### Event Model

| Field       | Type       | Required | Description                |
| ----------- | ---------- | -------- | -------------------------- |
| title       | String     | Yes      | Name of the event          |
| description | String     | No       | Optional event details     |
| categories  | String     | No       | Optional event categories  |
| creator     | ObjectId   | Yes      | Reference to User          |
| attendees   | [ObjectId] | No       | Array of User references   |
| created at  | Date       | Yes      | When the event is created  |
| state       | String     | Yes      | Values: opened, closed     |
| approval    | String     | Yes      | Values: accepted, rejected |

### Message Model

| Field     | Type     | Required | Description                         |
| --------- | -------- | -------- | ----------------------------------- |
| sender    | ObjectId | Yes      | Reference to User                   |
| receiver  | ObjectId | Yes      | Reference to User                   |
| text      | String   | Yes      | Message content                     |
| timestamp | Date     | Yes      | Automatically generated             |
| chatId    | ObjectId | Yes      | Reference to Chat                   |
| approval  | String   | Yes      | Values: accepted, rejected, pending |