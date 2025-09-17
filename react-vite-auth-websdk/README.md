# React + Vite with Catalyst Embedded Authentication

A modern React application template built with Vite that demonstrates Catalyst embedded authentication integration. This template provides a complete authentication flow with protected routes and user management.

🌐 **[Live Preview](https://react-auth.onslate.com/)**

## 🚀 Features

- **Modern React**: Built with React 18 and Vite for fast development
- **Catalyst Authentication**: Embedded authentication using Catalyst WebSDK
- **Protected Routes**: Route-based authentication with redirect handling
- **Responsive Design**: Styled with Tailwind CSS
- **User Context**: Centralized user state management

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Authentication**: Catalyst WebSDK
- **Linting**: ESLint

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v16 or higher)
- npm or yarn
- A Catalyst project with authentication configured
- Catalyst WebSDK setup in your project

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/muthaiyanmani/catalyst-recipes.git
cd react-vite-auth-websdk
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Catalyst

Make sure your Catalyst project is properly configured with:
- Authentication service enabled
- WebSDK initialized
- Proper domain configuration

### 4. Start the development server

```bash
catalyst serve
```

## 📁 Project Structure

```
src/
├── components/
│   ├── loader.jsx          # Loading component
│   └── protected-route.jsx # Route protection wrapper
├── context/
│   └── user.jsx           # User context and authentication state
├── pages/
│   ├── dashboard/
│   │   └── index.jsx      # Protected dashboard page
│   └── home/
│       ├── auth.jsx       # Authentication component
│       └── index.jsx      # Home page
├── assets/
│   └── react.svg          # React logo
├── app.jsx                # Main app component with routing
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## 🔐 Authentication Flow

1. **User lands on home page** (`/`)
2. **Authentication check** via Catalyst WebSDK
3. **Sign in/Sign up** using embedded Catalyst authentication
4. **Protected routes** redirect unauthenticated users
5. **Dashboard access** for authenticated users (`/dashboard`)

### Catalyst WebSDK

The Catalyst WebSDK is included in `index.html`:

```html
<script src="https://static.zohocdn.com/catalyst/sdk/js/4.6.0/catalystWebSDK.js"></script>
<script src="/__catalyst/sdk/init.js"></script>
```

## 📖 Learn More

- [Catalyst Documentation](https://docs.catalyst.zoho.com/)
- [Catalyst Authentication Guide](https://docs.catalyst.zoho.com/en/cloud-scale/help/authentication/native-catalyst-authentication/embedded-authentication/setup-embedded-auth/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
