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

## 🔧 Configuration

The application uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=https://frontend-take-home-service.fetch.com
```

## 📁 Project Structure
