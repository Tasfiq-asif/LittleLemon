Little Lemon
## Live Demo
Check out the live demo of the website: [Little Lemoon Live](https://littlelemon-6efed.web.app)

# Little Lemon Restaurant Web Application

## Introduction
Origianlly It was my Meta Front-End Developer Capstone project and i decided to make it a fullstack web application.

## Project Description
The Little Lemon Restaurant web application is designed to enhance customer convenience through online ordering and reservation management. Our dynamic booking system ensures that available times are adjusted in real-time, offering an optimized user experience. The project includes user authentication via Firebase, enhanced security with JWT and HTTP-only cookies, and an admin dashboard for restaurant management.

## Features
- **Online Ordering**: Customers can browse the menu and place orders online.
- **Dynamic Reservations**: Users can reserve a table, with available slots updated in real-time as bookings are made.
- **User Dashboard**: Registered users can view and manage their reservations.
- **Admin Dashboard**: Admins can manage the menu (add, delete, edit items), approve or cancel reservations, and monitor online orders.
- **JWT Authentication**: Secure authentication using Firebase and JWT stored in HTTP-only cookies.
- **Guest Reservations**: Unregistered users can still make reservations without needing to sign up.

## Technology Stack
- **Frontend**: React
- **State Management**: Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Firebase, JWT with HTTP-only cookies
- **Hosting**: [Your hosting service]
- **Security**: JWT, HTTPS

## Installation Guideline

### Prerequisites
Before running the project, ensure you have the following installed:
- Node.js
- npm or yarn
- MongoDB (local or cloud-based)
- Firebase account with project setup
- [Optional] Docker (if using containerization)

### Installation Steps
1. Clone the frontend repository:
   ```bash
   git clone https://github.com/Tasfiq-asif/LittleLemon.git
   cd little-lemon-restaurant

2. Clone the backend repository:
   ```bash
   git clone https://github.com/Tasfiq-asif/littlelemon-server.git
   cd little-lemon-restaurant

3.Install dependencies:
    ```bash
    npm install
    # Or with yarn
    yarn install
### Configure the environment variables:

1. Create a `.env` file in the root directory of the project.
2. Add the following variables to the `.env` file:

   ```env
   PORT=3000
   DB_URL=your_db_connection_uri
   FIREBASE_API_KEY=your_firebase_api_key
   JWT_SECRET=your_jwt_secret


### Run the application:

```bash
    npm start
    # Or with yarn
    yarn start

    

5.Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Configuration

- **Firebase**: Set up your Firebase project and copy the API key into the `.env` file under `FIREBASE_API_KEY`.
- **JWT Secret**: A secure JWT secret is required to manage authentication. Add it to `.env` as `JWT_SECRET`.
- **Database URL**: MongoDB connection URI should be added to `.env` under `DB_URL`.
- **Other Configs**: Adjust any other settings like port, third-party APIs, etc., as needed.

## Usage

Once installed and running, you can explore the features of the Little Lemon Restaurant app:

- **Online Orders**: Navigate to the "Order Online" section to browse the menu and place orders.
- **Reservations**: Go to the "Reservations" page to book a table. Available times will dynamically update based on other bookings.
- **User Dashboard**: Registered users can log in and view their reservation history in the dashboard.
- **Admin Dashboard**: Access to the admin dashboard allows for menu management, reservation approval/cancellation, and order tracking.

