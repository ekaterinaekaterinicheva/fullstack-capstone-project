# GiftLink: Full-Stack Gift Sharing Platform

GiftLink is a **cloud-native full-stack application** designed to promote sustainability and community sharing. It connects users who wish to give away household items with others who prefer recycling and reusing items over purchasing new ones.

## Project Overview
GiftLink was developed as a capstone project for the IBM Full-Stack JavaScript Developer Professional Certificate. It utilizes a **Microservices Architecture**, containerized with **Docker**, and managed via **Kubernetes and IBM Cloud Engine**.

## Key Features
- User Authentication: Secure Login/Registration using JWT and session storage.

- Item Management: Browse, search, and view detailed information on gifted items.

- Advanced Search: Filter items by name, category, condition, and age.

- Sentiment Analysis: Integrated service to analyze user comments and feedback.

- User Profiles: Editable user profiles to manage personal information.

- CI/CD Pipeline: Automated linting and build checks via GitHub Actions.

## Tech Stack
- Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)

- Backend: Node.js, Express.js

- Database: MongoDB (NoSQL)

- DevOps & Cloud: Docker, Kubernetes, OpenShift, IBM Code Engine

- Tools: Git, GitHub Actions (CI/CD), Agile (Kanban)

## Architecture
The application follows a **Microservices architecture** to ensure scalability and separation of concerns.

1. Client Tier: A React-based SPA (Single Page Application) that communicates with backend services via REST APIs.

2. Logic Tier (Microservices):
   - Gifts Service: Handles CRUD operations for gift listings.
   - Search Service: Provides filtering logic.
   - Authentication Service: Manages JWT-based security and user profiles.
   - Sentiment Analysis Service: An Express server that evaluates language tone in comments.

3. Data Tier: MongoDB serves as the persistence layer for users and gift data.

4. DevOps Tier: GitHub Actions automates linting and builds; Docker containers are orchestrated via Kubernetes.

## Installation & Setup

1. Clone the repository
```
git clone https://github.com/ekaterinaekaterinicheva/fullstack-capstone-project.git
cd giftlink
```

2. Set up the backend
   - Open the backend folder: ``` cd giftlink-backend ```.
   - Install dependencies: ``` npm install ```.
   - Create a ```.env ``` file and insert your ``` MONGO_URL ``` and ``` JWT_SECRET ```.
   - Start the server: ``` npm start ```.

3. Set up the frontend
   - Open the frontend folder: ``` cd giftlink-frontend ```.
   - Install dependencies: ``` npm install ```.
   - Start the React app: ``` npm start ```.
