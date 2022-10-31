import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/Main";
import DashboardPage from "pages/Dashboard";
import CoursePage from "pages/Course";
import PrivateRoute from "utils/privateRoute";
import Registration from "pages/Registration";
import LoginPage from "pages/Login";
import PublicRoute from "utils/publicRoute";
import CreationTaskPage from "pages/CreationTask";
import TaskPage from "pages/Task";

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
          path="/task/:taskId"
          element={
            <PrivateRoute>
              <TaskPage />
            </PrivateRoute>
          }
        ></Route>
                <Route
          exact
          path="/createTask/:sectionId"
          element={
            <PrivateRoute>
              <CreationTaskPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
