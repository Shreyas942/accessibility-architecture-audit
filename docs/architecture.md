# Accessibility Architecture Audit

## 1. Project Overview

This project is a simple full-stack web application created as part of the Accessibility Baseline & Repository Architecture Audit.

The project includes:

- Accessibility audit documentation
- Frontend client
- Backend server
- Test documentation

## 2. Project Structure

```text
accessibility-architecture-audit/
├── client/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server/
│   ├── package.json
│   └── server.js
├── docs/
│   ├── accessibility-audit.csv
│   ├── audit-report.md
│   ├── architecture.md
│   └── screenshots/
└── tests/
    └── README.md
```

## 3. Architecture Boundaries

### Client

The `client` folder contains the user interface.

Responsibilities:

- Display web pages
- Handle user interaction
- Send requests to the backend API

### Server

The `server` folder contains the backend application.

Responsibilities:

- Provide API endpoints
- Process client requests
- Return data to the client

### Docs

The `docs` folder contains project documentation and accessibility evidence.

Responsibilities:

- Store audit findings
- Store audit reports
- Store architecture documentation
- Store screenshots

### Tests

The `tests` folder contains testing documentation and future automated tests.

## 4. Local Setup

### Server Setup

Open a terminal inside the `server` folder.

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

### Client Setup

Open `client/index.html` in a web browser.

The client can communicate with the server through:

```text
GET /api/health
```

## 5. First Vertical Feature Slice

The first feature slice is a simple **Server Health Check**.

Flow:

```text
User clicks "Check Server"
        ↓
Client sends request
        ↓
GET /api/health
        ↓
Server processes request
        ↓
Server returns JSON response
        ↓
Client displays server status
```

This demonstrates the basic connection between the frontend and backend.

## 6. Future Improvements

Future development can include:

- Accessibility improvements
- More API endpoints
- Automated accessibility testing
- Database integration
- Improved UI components
