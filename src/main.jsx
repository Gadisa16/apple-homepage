import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Bootstrap CSS import
import 'bootstrap/dist/css/bootstrap.min.css';
// Create a root.
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
