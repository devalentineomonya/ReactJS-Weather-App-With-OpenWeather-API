# Deval Weather App

A modern, responsive weather application built with **Next.js**, updated from **React** for better performance and SEO benefits. This app allows users to check current weather information for their desired locations.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Cloning the Repository](#cloning-the-repository)
- [Installing Dependencies](#installing-dependencies)
- [Adding API Keys](#adding-api-keys)
- [Running the App](#running-the-app)
- [Contributing](#contributing)
- [Creating Pull Requests](#creating-pull-requests)
- [Review and Merge Process](#review-and-merge-process)

## Features
- Real-time weather updates
- Search by city or current location
- Responsive design for desktop and mobile

## Tech Stack
- **Next.js**: A React framework for better performance and SEO
- **CSS/Tailwind CSS**: For styling
- **Weather API**: Used for fetching weather data

## Getting Started
Follow these steps to get a local copy of the project up and running.

### Cloning the Repository
```bash
git clone https://github.com/devalentineomonya/ReactJS-Weather-App-With-OpenWeather-API.git
cd ReactJS-Weather-App-With-OpenWeather-API
```

### Installing Dependencies
Ensure you have **Node.js** installed, then run:
```bash
npm install
```
or with **Yarn**:
```bash
yarn install
```

### Adding API Keys
1. Sign up for a weather API service (OpenWeatherMap).
2. Obtain your API key.
3. Create an `.env.local` file in the root of your project and add:
   ```dotenv
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
   ```

### Running the App
To run the development server, use:
```bash
npm run dev
```
or with **Yarn**:
```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production
```bash
npm run build
```
This creates an optimized build of the app in the `.next` directory. You can then start the app with:
```bash
npm start
```

## Contributing
We welcome contributions! Follow these guidelines to contribute to the project.

### Creating Pull Requests
1. **Fork** the repository.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add detailed description of changes"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request**:
   - Go to the repository on GitHub.
   - Click on `New Pull Request` and follow the instructions.

### Review and Merge Process
1. The repository maintainers will review your PR.
2. Feedback or changes may be requested.
3. Once approved, your PR will be merged into the `main` branch.

---

Feel free to contribute new features, bug fixes, or documentation improvements. We appreciate your help in making this app better!

