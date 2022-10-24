import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/Main";
import DashboardPage from "pages/Dashboard";
import CoursePage from "pages/Course";
import Task from "pages/Task";
import PrivateRoute from "utils/privateRoute";
import Registration from "pages/Registration";
import LoginPage from "pages/Login";
import PublicRoute from "utils/publicRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute>
              <MainPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          exact
          path="/registration"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        ></Route>
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          exact
          path="/course/:courseId"
          element={
            <PrivateRoute>
              <CoursePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          exact
          path="/task"
          element={
            <PrivateRoute>
              <Task />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
