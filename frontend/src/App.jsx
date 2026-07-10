import { Routes, Route } from "react-router-dom";
import{BrowserRouter as Router} from "react-router-dom";    
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Analytics from "./components/Analytics/Analytics";
import BudgetPlanner from "./components/BudgetPlanner";
import AIAdvisor from "./components/AIAdvisor/AIAdvisor";


function App() {
  return (
  <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/transactions" element={<Transactions />} />
  <Route path="/analytics" element={<Analytics />} />
  <Route path="/budget" element={<BudgetPlanner />} />
  <Route path="/advisor" element={<AIAdvisor />} />
  <Route path="/settings" element={<Settings />} />
</Routes>
  );
}

export default App;