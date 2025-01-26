import './App.css'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { FinancialRecordsProvider } from './contexts/financial-record-context'
import { SignedIn, UserButton, SignedOut, SignUpButton, SignInButton } from '@clerk/clerk-react'
import { Stocks } from './pages/stocks/stocks'
import { RetirementACC } from './pages/401k/401k'
import { RothIRA } from './pages/rothira/rothira'
import { Cryptocurrency } from './pages/cryptocurrency/crypto'


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
            <Link to="/stocks">Stocks</Link>
            <Link to="/rothira">Roth IRA</Link>
            <Link to="/401k">401(K)</Link>
            <Link to="/crypto">Crypto Currency</Link>
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
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/401k" element={<RetirementACC />} />
          <Route path="/rothira" element={<RothIRA />} />
          <Route path="/crypto" element={<Cryptocurrency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
