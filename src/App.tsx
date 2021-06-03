import React from 'react';
import { ErrorBoundary, NavBar, Router } from 'components';

function App() {
    return (
        <ErrorBoundary>
            <NavBar />
            <Router />
        </ErrorBoundary>
    );
}

export default App;
