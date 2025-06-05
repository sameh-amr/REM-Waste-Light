# Project Bolt Skip Hire

## Overview
This project is a modern React application for selecting skip sizes for waste management, built with Vite, TypeScript, and Tailwind CSS. It features a clean UI, dynamic skip cards with images, and a modular code structure.

### Approach
- **Component-Based:** The UI is split into reusable components (`SkipCard`, `SkipsList`, `SkipsPage`) for maintainability and scalability.
- **Type Safety:** All skip data is strongly typed using TypeScript interfaces.
- **Custom Hooks:** Data fetching is abstracted into a custom hook (`useSkips`) for separation of concerns.
- **Styling:** Tailwind CSS is used for rapid, utility-first styling and responsive design.
- **Static Assets:** Skip images are stored in `public/images` and dynamically loaded based on skip size.
- **Clean Git History:** Commits are organized by logical feature sets for clarity and maintainability.

## How to Run the Project

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```powershell
   git clone git@github.com:sameh-amr/REM-Waste-Light.git
   cd <your-repo-folder>
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```

### Running the Development Server
```powershell
npm run dev
```
- The app will be available at the local address shown in your terminal (usually http://localhost:5173).

### Building for Production
```powershell
npm run build
```
- The output will be in the `dist` folder.


## Project Structure
- `src/components/` – React components
- `src/hooks/` – Custom React hooks
- `src/services/` – API and data services
- `src/types/` – TypeScript type definitions
- `public/images/` – Static skip images

## Customization
- To add more skip images, place them in `public/images` and update the logic in `SkipCard.tsx`.

---

For any questions or contributions, please open an issue or pull request on GitHub.
