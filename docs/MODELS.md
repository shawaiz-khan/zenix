# Zenix Data Models

### User Model

| Field     | Type       | Required | Description             |
| --------- | ---------- | -------- | ----------------------- |
| username  | String     | Yes      | Unique                  |
| email     | String     | Yes      | Used for login          |
| password  | String     | Yes      | Hashed                  |
| role      | String     | Yes      | Values: admin, user     |
| favorites | [ObjectId] | No       | Refer to events         |
| authToken | String     | Yes      | Used for authentication |

### Event Model

| Field       | Type       | Required | Description                |
| ----------- | ---------- | -------- | -------------------------- |
| title       | String     | Yes      | Name of the event          |
| description | String     | No       | Optional event details     |
| categories  | String     | No       | Optional event categories  |
| creator     | ObjectId   | Yes      | Reference to User          |
| attendees   | [ObjectId] | No       | Array of User references   |
| createdAt   | Date       | Yes      | When the event is created  |
| state       | String     | Yes      | Values: opened, closed     |
| approval    | String     | Yes      | Values: accepted, rejected |

### Chat Room Model

| Field     | Type       | Required | Description                               |
| --------- | ---------- | -------- | ----------------------------------------- |
| members   | [ObjectId] | Yes      | Exactly 2 user IDs in a 1v1 chat          |
| closeChat | Boolean    | Yes      | Close  or block the chat room             |
| lastMsg   | String     | No       | Optional: Last message for preview        |
| updatedAt | Date       | Yes      | When the last message was sent (auto-upd) |

### Message Model

| Field    | Type     | Required | Description                         |
| -------- | -------- | -------- | ----------------------------------- |
| sender   | ObjectId | Yes      | Reference to User                   |
| receiver | ObjectId | Yes      | Reference to User                   |
| message  | String   | Yes      | Message content                     |
| sentAt   | Date     | Yes      | Automatically generated             |
| chatId   | ObjectId | Yes      | Reference to Chat                   |
| approval | String   | Yes      | Values: accepted, rejected, pending |