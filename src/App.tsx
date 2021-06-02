import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';
import NavBar from './components/NavBar/NavBar.component';
import Router from './components/Router/Router.component';

function App() {
    return (
        <ErrorBoundary>
            <NavBar />
            <Router />
        </ErrorBoundary>
    );
}

export default App;
