import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Interior } from './Interior.tsx';
import { Exterior } from './Exterior.tsx';
import { Enamel } from './Enamel.tsx';
import { Primer } from './Primer.tsx';
import { OtherItems } from './OtherItems.tsx';
import { ColorInk } from './ColorInk.tsx';
import './index.css';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Ensure the root element exists and create the root
if (rootElement) {
  const root = createRoot(rootElement);

  // Render the entire app with routing
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/enamel" element={<Enamel />} />
          <Route path="/primer" element={<Primer />} />
          <Route path="/ink" element={<ColorInk />} />
          <Route path="/other" element={<OtherItems />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
