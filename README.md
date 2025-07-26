# MedReach - Community Medicine Distribution Platform

A full-stack web application connecting underserved communities with healthcare services, enabling medicine requests, health awareness, and volunteer coordination.

## Features

- **User Authentication**: Secure signup/login with Firebase Authentication
- **Role-Based Access Control**: Different dashboards for beneficiaries, volunteers, clinics, and admins
- **Medicine Requests**: Beneficiaries can request essential medicines
- **Inventory Management**: Volunteers and clinics can manage medicine stock
- **Health Content**: Educational resources and health tips
- **Real-time Updates**: Track request status and receive notifications

## Tech Stack

### Frontend
- React.js with Vite
- Mantine UI (for accessible components)
- React Router (for navigation)
- Firebase Authentication
- Axios (for API calls)

### Backend
- Node.js with Express.js
- MongoDB Atlas (Database)
- Firebase Admin SDK
- JWT Authentication
- Express Validator

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Firebase project

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/medreach.git
   cd medreach
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env` in the root directory
   - Fill in your Firebase and MongoDB credentials

3. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

4. **Set up Firebase**
   - Create a new Firebase project
   - Enable Email/Password authentication
   - Generate a private key for the Admin SDK
   - Update the Firebase config in `.env`

5. **Run the application**
   ```bash
   # Start the backend server (from server directory)
   npm run dev

   # Start the frontend development server (from client directory)
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
medreach/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source code
│       ├── components/    # Reusable UI components
│       ├── pages/         # Page components
│       ├── context/       # React context providers
│       ├── utils/         # Utility functions
│       ├── services/      # API service functions
│       └── assets/        # Images, fonts, etc.
├── server/                # Backend Node.js application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── middleware/       # Custom middleware
├── .env.example          # Environment variables template
└── README.md             # Project documentation
```

## Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Mantine](https://mantine.dev/) - React components library
- [Firebase](https://firebase.google.com/) - Authentication and hosting
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database hosting
