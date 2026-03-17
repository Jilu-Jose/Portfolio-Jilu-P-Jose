# Portfolio: Jilu P. Jose
A premium, industry-grade portfolio showcasing projects, experience, models, and skill sets in Machine Learning, Data Science, and MLOps.

This project was migrated from a static Flask architecture to a robust MERN-stack methodology utilizing an immersive, animated, glassmorphic UI.

## Tech Stack
- **Frontend**: React.js (Vite), React Router, Custom CSS (Glassmorphism & CSS Animations)
- **Backend**: Node.js, Express.js (REST API architecture)
- **Data**: In-memory JSON static arrays serving dynamic `/api` endpoints

## Project Structure
The repository is split into two primary environments:
- `/frontend`: The React application
- `/backend`: The Express API server

## How to Run Locally

### 1. Start the Backend API
```bash
cd backend
npm install
npm run dev
```
*The server will start on port 5001.*

### 2. Start the Frontend App
Open a split terminal or new window:
```bash
cd frontend
npm install
npm run dev
```
*Vite will start the client on port 5173. The browser will automatically connect to the backend.*

## Key Features
- **Global Animated Mesh**: Layered procedural CSS orbs providing deep backgrounds without JavaScript overhead.
- **Glassmorphism Containers**: Native `<dialog>` and `backdrop-filter` capabilities replacing flat divs.
- **Dynamic Content Flow**: Projects and ML Models are requested via JSON over HTTP to mimic true database fetching architectures.
- **Dark/Light Theming**: Complete CSS variable mapping enabling deep, instantly switching theme states.
- **Custom Components**: Clean mapping of standard elements into `ExperienceTimeline`, `Services`, `ProjectsGrid`, and more.
