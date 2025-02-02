import { SignIn } from "./pages/SignIn";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
