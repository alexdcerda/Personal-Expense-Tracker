import './App.css'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { FinancialRecordsProvider } from './contexts/financial-record-context'
import { SignedIn, UserButton, SignedOut, SignUpButton, SignInButton } from '@clerk/clerk-react'
import Analytics from './pages/analyics/analytics.tsx'


function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar" style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          margin: '0 auto',
          width: '97%'
        }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/">Dashboard</Link>
            <Link to="/analytics">Analytics</Link>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <SignedOut>
              <SignUpButton mode='modal'/>
              <SignInButton mode='modal'/>
            </SignedOut>
            <SignedIn>
              <UserButton showName />
            </SignedIn>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
