# README.md

# Frontend Application

This is the frontend application for the MERN stack project. It connects to the backend server built with Express and MongoDB.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository or download the project files.
2. Navigate to the `frontend` directory in your terminal.
3. Install the dependencies by running:

   ```
   npm install
   ```

### Running the Application

1. Ensure that the backend server is running on `http://localhost:5000`.
2. Start the frontend application by running:

   ```
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to view the application.

### Connecting to the Backend

The frontend application fetches data from the backend server using the `fetchData` function defined in `src/services/api.js`. The data is displayed in the `ExampleComponent` component.

### Folder Structure

- `public/index.html`: Main HTML file.
- `src/App.js`: Main component of the React application.
- `src/index.js`: Entry point for the React application.
- `src/components/ExampleComponent.js`: Example component demonstrating data fetching.
- `src/services/api.js`: Functions to interact with the backend API.
- `package.json`: Configuration file for npm.

### License

This project is licensed under the MIT License.