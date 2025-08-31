# Quick Installation Guide

## Prerequisites
- Node.js 18+ 
- npm 8+

## Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd healthchain-pro
   npm install
   ```

2. **Start the Application**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5000) and frontend (port 5173) simultaneously.

## Alternative Commands

- **Backend only**: `npm run server`
- **Frontend only**: `npm run client`
- **Install all dependencies**: `npm run install:all`

## Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## Troubleshooting

If you encounter any issues:

1. **Clear node_modules and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version**:
   ```bash
   node --version  # Should be 18+
   ```

3. **Check if ports are available**:
   ```bash
   lsof -i :5000  # Check if port 5000 is free
   lsof -i :5173  # Check if port 5173 is free
   ```

## Environment Variables

Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
```

For production, also create a `.env` file in the server directory with your MongoDB and API keys.
