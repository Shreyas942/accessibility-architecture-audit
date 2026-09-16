# Accessibility Baseline & Repository Architecture Audit

## Project Overview

This project was created as part of the Accessibility Baseline & Repository Architecture Audit.

The project includes an accessibility audit of a public-facing website and a simple full-stack project structure with separate client, server, documentation, and testing areas.

## Website Audited

**Website:** India.gov.in

**Accessibility Score:** 89/100

**Tool:** Google Lighthouse 13.4.1

**Testing:** Lighthouse accessibility audit and keyboard-only navigation.

## Key Accessibility Findings

Five issues were documented:

1. Incorrect ARIA parent-child structure
2. Insufficient color contrast
3. Incorrect list structure
4. Redundant image alternative text
5. Inconsistent descriptions for identical links

Detailed findings are available in:

`docs/accessibility-audit.csv`

The complete audit report is available in:

`docs/audit-report.md`

Screenshots are available in:

`docs/screenshots/`

## Project Architecture

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

## Client

The `client` folder contains the frontend interface.

Technologies:

- HTML
- CSS
- JavaScript

## Server

The `server` folder contains the backend API.

Technologies:

- Node.js
- Express.js

### API Endpoint

```text
GET /api/health
```

The endpoint returns a server health message.

## Local Setup

### 1. Start the Server

Open a terminal in the `server` folder:

```bash
npm install
npm start
```

The server runs at:

```text
http://localhost:3000
```

### 2. Test the API

Open:

```text
http://localhost:3000/api/health
```

### 3. Run the Client

Open:

```text
client/index.html
```

in a web browser.

Click **Check Server** to verify the client-server connection.

## First Vertical Feature

The first implemented feature is a **Server Health Check**.

The client sends a request to the backend, and the backend returns a JSON response that is displayed on the webpage.

## Documentation

Project documentation is available in the `docs` directory.

- `accessibility-audit.csv` — accessibility issue data
- `audit-report.md` — audit findings and recommendations
- `architecture.md` — project architecture and setup
- `screenshots/` — audit evidence

## Future Improvements

- Add automated accessibility tests
- Add more backend API features
- Improve accessibility of the client interface
- Add database integration
- Expand frontend functionality
