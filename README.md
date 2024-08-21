
# Demore Shop - E-commerce Application
![ecom1](https://github.com/user-attachments/assets/8470d03f-fca2-4f57-aa6a-e622853cc824)
![eom2](https://github.com/user-attachments/assets/e4dbf81e-8c45-45ec-bd6b-0a7b8dae29a3)
![ecom3](https://github.com/user-attachments/assets/cf4218f4-cb7b-4f5e-a466-4fcf5f862835)
![ecom4](https://github.com/user-attachments/assets/c4b38261-d070-44dc-a3c4-ec4aa9342a8f)

Welcome to **Demore Shop**, an advanced E-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates a full-fledged online shopping platform with modern features such as Firebase Storage for image uploads, JWT-based authentication, and more.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user registration and login using JWT tokens.
- **Product Management**: Admin panel for managing products, including creating, updating, and deleting products.
- **Shopping Cart**: Add, remove, and update items in the shopping cart.
- **Order Management**: Users can place orders and view their order history.
- **Payment Integration**: Integration with a payment gateway for processing transactions.
- **Firebase Storage**: Upload and manage product images securely using Firebase Storage.
- **Responsive Design**: Mobile-friendly UI/UX.
- **Product Search and Filtering**: Easily search and filter products by categories and other criteria.
- **Admin Dashboard**: A powerful admin dashboard to monitor and manage the shop.

## Demo

A live demo of the application can be found [here](#). *(Replace with the actual demo link once deployed.)*

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Alex1-ai/Demore-restapi]
   cd demore-shop
   ```

2. **Install dependencies**:
   ```bash
   # For the server
   cd Demore-restapi
   npm install

   # For the client
   cd ../client
   npm install
   ```

3. **Environment variables**:
   Create a `.env` file in the `server` and `client` directories and add your environment variables. Here's an example:

   - **Server (.env)**:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     FIREBASE_API_KEY=your_firebase_api_key
     FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     FIREBASE_PROJECT_ID=your_firebase_project_id
     FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     FIREBASE_APP_ID=your_firebase_app_id
     ```

   - **Client (.env)**:
     ```
     REACT_APP_API_URL=http://localhost:5000/api
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     ```

4. **Run the application**:
   ```bash
   # Start the server
   cd server
   npm start

   # Start the client
   cd ../client
   npm start
   ```

5. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- **Frontend**: React, Redux, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Firebase Storage
- **Payment Integration**: Stripe (or another payment gateway)
- **Hosting/Deployment**: *(Include information on how you deployed the app, e.g., Heroku, Netlify, Vercel)*

## Usage

- **User Authentication**: Register or log in to access the shop.
- **Browse Products**: View products, search by keywords, or filter by categories.
- **Add to Cart**: Add desired products to your cart.
- **Checkout**: Proceed to checkout, enter payment details, and place an order.
- **Admin Features**: Log in as an admin to access the dashboard and manage products, orders, and users.

## Project Structure

```
demore-shop/
│
├── client/              # Frontend (React)
│   ├── public/          # Public assets
│   ├── src/             # React components, Redux store, etc.
│   └── package.json
│
├── server/              # Backend (Node.js, Express)
│   ├── config/          # Configuration files (e.g., DB connection)
│   ├── controllers/     # API controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── package.json
│
└── README.md
```

## API Documentation

Detailed API documentation can be found [here](https://demore-shop.onrender.com/). 
## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
