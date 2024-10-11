# Tech Fix - Gadget Repair Service

## Project Overview

Tech Fix is a web application for a gadget repair service that allows users to schedule appointments, learn about various repair services, and manage their accounts. The platform features a responsive design and implements Firebase Authentication for secure user management.

## Features

- User authentication (email/password, Google, and Facebook sign-in)
- Responsive design for multiple device sizes
- Service categories showcase
- Appointment scheduling system
- Interactive UI with Bootstrap 5

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.2
- Firebase Authentication
- Firebase Firestore

## Project Structure

```
tech-fix/
├── img/                    # Image assets
├── bootstrap-5.3.2-dist/   # Bootstrap files
├── index.html              # Main landing page
├── signin.html             # Sign-in page
├── index.css               # Styles for landing page
├── signin.css              # Styles for sign-in page
├── index.js                # JavaScript for landing page
├── signin.js               # JavaScript for sign-in functionality
└── dashboard.html          # User dashboard (post-login)
```

## Setup Instructions

1. Clone the repository
2. Set up Firebase:
   - Create a new Firebase project
   - Replace the Firebase configuration in both `index.js` and `signin.js`:
     ```javascript
     const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id",
     };
     ```
3. Ensure all dependencies are correctly linked:
   - Bootstrap CSS and JS files
   - Firebase SDK scripts

## Authentication Features

The application supports multiple authentication methods:

1. Email/Password registration and login
2. Google Sign-In
3. Facebook Sign-In (implemented but may need additional setup)

## Key Components

### Landing Page (`index.html`)

- Navigation bar with responsive design
- Hero section with sign-up modal
- Service categories showcase
- Appointment scheduling section
- Footer with contact information

### Sign-In Page (`signin.html`)

- Email/Password sign-in form
- Quick sign-in options (Google, Facebook)
- Sign-up modal for new users
- Password recovery option

## JavaScript Functionality

### `index.js`

- Handles user registration
- Manages sign-up modal interactions
- Implements Google and Facebook authentication

### `signin.js`

- Manages user sign-in
- Handles authentication state
- Redirects to dashboard upon successful login

## CSS Styling

The project uses a combination of Bootstrap classes and custom CSS:

- Responsive design breakpoints
- Custom color scheme
- Consistent typography

## Firebase Integration

- Authentication methods implementation
- User data storage in Firestore
- Security rules implementation

## Known Issues

- Facebook authentication may require additional setup

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details

---

## AUTHOR

AREGBESOLA JOHN BELOVED
+2348118870050
