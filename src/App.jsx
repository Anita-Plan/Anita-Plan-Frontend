import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./assets/pages/loginPage";
import SignupPage from "./assets/pages/signupPage";
import ErrorPage from "./assets/pages/errorPage";
import About from "./assets/pages/About";
import PlanPage from "./assets/pages/planPage";
import Header from "./assets/components/Header";
import WeeklyPlanPage from "./assets/pages/weeklyPlansPage";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies("token_id");
  const token = localStorage.getItem("authToken");
  return (
    <div className="App">
      <Header />
      <Routes>
        {token && (
          <>
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/weeklyPlan" element={<WeeklyPlanPage />} />
          </>
        )}

        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
