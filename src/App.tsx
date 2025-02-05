import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';

export default function App() {
    return (
        <Routes>
            {routes.map((route, idx) => (
                <Route
                    key={idx} // 키를 추가하여 React 경고 방지
                    path={route.path}
                    element={route.element}
                >
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
    );
}