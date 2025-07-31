# Zenix Navigation Structure

This document outlines the navigation links used across the Zenix platform. Routes are grouped based on access level: public, authenticated users, and admins.

## Public Routes

| Page     | Path             | Description                         |
| -------- | ---------------- | ----------------------------------- |
| Home     | `/`              | Landing page with overview and CTA  |
| Home     | `/features`      | Features of the whole app           |
| Events   | `/events`        | Browse upcoming and trending events |
| Login    | `/auth/login`    | Sign in to your Zenix account       |
| Register | `/auth/register` | Create a new Zenix account          |

## Authenticated User Routes

| Page          | Path             | Description                                    |
| ------------- | ---------------- | ---------------------------------------------- |
| Dashboard     | `/dashboard`     | Overview of user events, invites, and activity |
| My Events     | `/my-events`     | List of created and joined events              |
| Create Event  | `/create-event`  | Event creation form                            |
| Chat Rooms    | `/chat`          | Real-time chat per event                       |
| Notifications | `/notifications` | Invites, approvals, updates                    |
| Profile       | `/profile`       | Edit user info and preferences                 |
| Logout        | `/auth/logout`   | End current session                            |

## Admin Routes (Role-Based Access)

| Page             | Path                | Description                                 |
| ---------------- | ------------------- | ------------------------------------------- |
| Admin Dashboard  | `/admin/dashboard`  | Platform stats, activity, and system health |
| User Management  | `/admin/users`      | Manage users                                |
| Event Moderation | `/admin/moderation` | Approve or reject reported events           |

## Planned Routes

| Page      | Path         | Description                                |
| --------- | ------------ | ------------------------------------------ |
| Favorites | `/favorites` | View saved or followed events              |
| Settings  | `/settings`  | Manage privacy, account, and notifications |