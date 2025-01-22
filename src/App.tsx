import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';

export default function App() {
  return (
      <Router>
        <Routes>
          {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element}>
                {route.children &&
                    route.children.map((child, childIdx) => (
                        <Route
                            key={`${idx}-${childIdx}`}
                            path={child.path}
                            element={child.element}
                        />
                    ))}
              </Route>
          ))}
        </Routes>
      </Router>
  );
}
