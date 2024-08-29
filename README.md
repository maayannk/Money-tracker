
# Money Tracker App

## Project Structure

The project is organized into two main folders:

- **Backend**: Contains the Node.js, Express.js, and MongoDB setup for the backend.
- **Frontend**: Contains the Vite-powered React.js setup for the frontend.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Setting Up the Backend

1. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```

2. **Install the required dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the backend folder:**

   The `.env` file will store your environment variables, including the MongoDB connection string.

   ```bash
   touch .env
   ```

4. **Add the MongoDB connection string to the `.env` file:**

   Replace `your-mongo-url` with your actual MongoDB connection string.

   ```env
   MONGO_URL=your-mongo-url
   ```

5. **Run the backend server:**

   ```bash
    node index.js
   ```

### Setting Up the Frontend

1. **Navigate to the frontend folder:**

   ```bash
   cd frontend
   ```

2. **Install the required dependencies:**

   ```bash
   npm install
   ```

3. **Run the React development server:**

   ```bash
   npm run dev
   ```

### Connecting the Frontend to the Backend

Make sure your frontend application is configured to communicate with your backend server. This typically involves setting the base URL for API requests in your frontend code.

## Environment Variables

- **MONGO_URL**: The connection string for your MongoDB database.

## Available Scripts

### Backend

- **`npm start`**: Starts the Express.js server.

### Frontend

- **`npm run dev `**: Starts the React development server.

## Learn More

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
