import { SignIn } from "../pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function Routess() {

    return(
        <Router>
              <Routes>
            <Route path="signin" element={<SignIn />} />
          </Routes>
    </Router>

    )
}