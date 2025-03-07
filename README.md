# 🐾 FetchMatch - Dog Adoption Platform

FetchMatch is a modern web application that connects potential dog adopters with their perfect furry companions. Built with React and powered by the Fetch API, this platform offers a seamless experience for browsing, favoriting, and matching with adoptable dogs.

## ✨ Features

### 🔐 Authentication
- Secure login system with session management
- Protected routes for authenticated users
- Persistent login state with local storage

### 🔍 Search & Filter
- Browse dogs by multiple criteria:
  - Breed selection
  - Age range
  - Location (City and ZIP code)
  - Sort by breed (A-Z or Z-A)
- Pagination support for large result sets
- Real-time search updates

### ❤️ Favorites System
- Add dogs to favorites
- View all favorited dogs
- Remove dogs from favorites
- Local storage persistence for favorites

### 🤝 Matching System
- Generate matches from favorited dogs
- View all matched dogs
- Automatic removal from favorites when matched
- Match history tracking

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Accessible navigation
- Clean, modern UI with Tailwind CSS

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.0.0
- **Routing**: React Router DOM 7.3.0
- **Styling**: Tailwind CSS 4.0.9
- **UI Components**: Headless UI 2.2.0
- **Icons**: Heroicons 2.2.0
- **HTTP Client**: Axios 1.8.1
- **State Management**: Zustand 5.0.3
- **Build Tool**: Vite 6.2.0

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/fetch-match.git
cd fetch-match
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

FetchTest/
├── node_modules/              # Project dependencies
├── public/                   # Static assets
│   └── vite.svg             # Vite logo
├── src/                     # Source code
│   ├── context/            # React context providers
│   │   ├── AuthContext.jsx        # Authentication context provider
│   │   └── FavoritesContext.jsx   # Favorites management context
│   ├── pages/             # Page components
│   │   ├── DogCard.jsx          # Reusable dog card component
│   │   ├── DogDetails.jsx       # Individual dog details page
│   │   ├── Favorites.jsx        # Favorites page
│   │   ├── Footer.jsx          # Footer component
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── Login.jsx          # Authentication page
│   │   ├── MatchedDogs.jsx     # Matched dogs display
│   │   ├── Navigation.jsx      # Navigation bar
│   │   ├── Search.jsx         # Dog search page
│   │   └── Testimonial.jsx     # User testimonials component
│   ├── routes/            # Routing utilities
│   │   └── ProtectedRoute.jsx   # Route protection logic
│   ├── App.css            # Application-specific styles
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── .gitignore             # Git ignore configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package-lock.json      # Dependency lock file
├── package.json           # Project configuration and dependencies
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
