import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';  // Import the main App component

// Get the root element from the HTML file (usually `index.html`)
const rootElement = document.getElementById('root');

// Create a root and render the App component
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
