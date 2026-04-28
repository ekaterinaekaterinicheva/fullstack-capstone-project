# GiftLink: Full-Stack Gift Sharing Platform

GiftLink is a **full-stack application** designed to promote sustainability and community sharing. It connects users who wish to give away household items with others who prefer recycling and reusing items over purchasing new ones. Originally developed as part of the IBM Full Stack Developer Capstone, this version has been optimized and deployed using a modern cloud-native stack.

## Live Demo
-   **Frontend:** [https://giftlinkme.netlify.app/](https://giftlinkme.netlify.app/)
-   **Backend API:** [https://giftlink-backend-xoeo.onrender.com](https://giftlink-backend-xoeo.onrender.com)

## Architecture & Cloud-Native Migration
GiftLink was originally architected as **a cloud-native application** designed using **Docker** and deployed on **IBM Cloud Code Engine** (Kubernetes-based) and **Red Hat OpenShift**.

To ensure the project remains accessible for live demonstration, the services were decoupled and migrated to a PaaS (Platform-as-a-Service) architecture. This migration demonstrates the application’s **portability** and decoupled **microservices design**, allowing it to run in any environment: from local containers to serverless cloud providers.

## Key Features
- **User Authentication**: Secure Login/Registration using JWT and session storage.
- **Item Management**: Browse, search, and view detailed information on gifted items.
- **Advanced Search**: Filter items by name, category, condition, and age.
- **Sentiment Analysis**: Integrated service to analyze user comments and feedback.
- **User Profiles**: Editable user profiles to manage personal information.
- **CI/CD Pipeline**: Automated linting and build checks via GitHub Actions.

## Tech Stack
- **Frontend:** React.js, JavaScript (ES6+), Bootstrap 5, HTML5, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (cloud-managed NoSQL)
- **Production Hosting:** Netlify (Frontend), Render (Backend)
- **DevOps & Cloud (Legacy):** Docker, Kubernetes, OpenShift, IBM Code Engine
- **Tools:** Git, GitHub Actions (CI/CD), Agile (Kanban)

## Architecture
The application follows a **Microservices architecture** to ensure scalability and separation of concerns.

1. **Client Tier (Frontend):** A React-based SPA (Single Page Application) deployed on **Netlify**.
   - Uses Edge Routing for fast delivery.
   - Handles state management and dynamic UI updates.
   - Communicates with the Logic Tier via secure REST APIs.

3. **Logic Tier (Microservices):** Hosted on Render web services, these modules handle the core business rules:
   - Gifts Service: Handles CRUD operations for gift listings.
   - Search Service: Provides filtering logic.
   - Authentication Service: Manages JWT-based security, password hashing with Bcrypt, and user session persistence.
   - Sentiment Analysis Service: An Express server that evaluates the emotional tone in comments.

4. **Data Tier:** Utilizes MongoDB Atlas as a cloud-managed database layer.
   - Implements a document-based schema for flexible data modeling of users and gifts.
   - Secured via IP whitelisting and encrypted connection strings.

5. **DevOps & Deployment Tier:** Originally designed for container orchestration, the project maintains Docker-readiness while utilizing CI/CD with automated builds and deployments triggered via **GitHub Actions** and **Netlify/Render** webhooks.

## Containerization (Legacy)
While the live version is currently hosted on Netlify and Render, the codebase remains **container-ready**. The repository includes ``` Dockerfile ``` and ```docker-compose.yml ```.

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
   - Create a ```.env ``` file and insert ``` REACT_APP_BACKEND_URL=https://giftlink-backend-xoeo.onrender.com ```
   - Start the React app: ``` npm start ```.
